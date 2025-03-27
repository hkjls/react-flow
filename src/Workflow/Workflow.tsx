import {
  Background,
  BackgroundVariant,
  Connection,
  ConnectionMode,
  Controls,
  Edge,
  MarkerType,
  Node,
  OnNodeDrag,
  OnReconnect,
  Panel,
  ReactFlow,
  ReactFlowInstance,
  reconnectEdge,
  useEdgesState,
  useNodesState,
  useReactFlow,
  useStore,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Box, Flex, IconButton, Spinner, Text } from "@chakra-ui/react";
import { COMPONENTS, initialEdges, initialNodes } from "../constants";
import { v4 as uuid } from "uuid";
import { useCallback, useEffect, useRef, useState } from "react";
import ElectricalComponent from "../Components/ElectricalComponent";
import Wire from "../Components/Wire";
import ConnectionLine from "../Components/ConnectionLine";
import { ElectricalComponentState, ElectricalComponentType, ElectricalComponentData } from "../types";
import Bulb from "../Components/Bulb";
import Battery from "../Components/Battery";
import ThermalRelayLR2 from "../Components/ElecIComponents/ThermalRelay-LR2"
import ContactorLSI from "../Components/ElecIComponents/Contactor-LS1";
import ContactorLCI from "../Components/ElecIComponents/Contactor-LC1";
import ContactorDN from "../Components/ElecIComponents/Contactor-DN";
import CircuitBreaker from "../Components/ElecIComponents/CircuitBreaker-32A";
import ComponentDetail from "../Components/ComponentDetail";
import Board from "../Components/Board";
import { isPointInBox, zoomSelector } from "../utils";
import useKeyBindings from "../hooks/useKeyBindings";
import { Floppy, Moon, Sun } from "react-bootstrap-icons";
import { useData, useUpdateData } from "../api";
import DownloadBtn from "../Components/DownloadBtn";
import { useDarkMode } from "../store";
import useHistory from "../hooks/useHistory";
import Numeric from "../icons/image/ICONEACTEMIUM.png";
import MenuBar from "../Components/Menu";
import UserGrades from "../Components/UserGrades";

const nodeTypes = {
  electricalComponent: ElectricalComponent,
  bulb: Bulb,
  battery: Battery,
  board: Board,
  thermalrelay: ThermalRelayLR2,
  contactorlsi: ContactorLSI,
  contactorlci: ContactorLCI,
  contactordn: ContactorDN,
  circuitbreaker: CircuitBreaker
};

const edgeTypes = {
  wire: Wire,
};

export const Workflow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const { addNode, removeNode, addEdge, removeEdge, undo, redo } = useHistory();

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = {
        ...connection,
        type: "wire",
        id: uuid(),
        markerEnd: {
          type: MarkerType.Arrow,
          width: 0,
          height: 0,
          color: "#FFC300",
        },
      };
      addEdge(edge);
    },
    [addEdge]
  );

  const isValidConnection = (connection: Edge | Connection) => {
    const { source, target } = connection;

    if (source === target) return true;
    return true;
  };
  // const isValidConnection = () => true

  const dragOutsideRef = useRef<ElectricalComponentType | null>(null);

  const { screenToFlowPosition, getIntersectingNodes, setViewport, getNodes, getEdges } =
    useReactFlow();

  console.log(getEdges())

  const onDragStart = (
    event: React.DragEvent<HTMLButtonElement>,
    type: ElectricalComponentType
  ) => {
    dragOutsideRef.current = type;
    event.dataTransfer.effectAllowed = "move";
  };

  const onDragOver: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const onDrop: React.DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    const type = dragOutsideRef.current;

    if (!type) return;

    let position = screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });

    const boards = nodes?.filter(
      (node) => node.type === ElectricalComponentType.Board
    );
    const board = boards.find((board) => {
      return isPointInBox(
        { x: position.x, y: position.y },
        {
          x: board.position?.x || 0,
          y: board?.position?.y || 0,
          height: board?.measured?.height || 0,
          width: board?.measured?.width || 0,
        }
      );
    });

    if (board) {
      const { x, y } = board?.position || {
        x: 0,
        y: 0,
      };
      const { x: dragX, y: dragY } = position || {
        x: 0,
        y: 0,
      };
      position = { x: dragX - x, y: dragY - y };
    }

    let node: Node | undefined;
    if (
      [
        ElectricalComponentType.Capacitor,
        ElectricalComponentType.Inductor,
        ElectricalComponentType.Resistor,
      ].includes(type)
    ) {
      node = {
        id: uuid(),
        type: "electricalComponent",
        position,
        data: { type, value: 3 },
        parentId: board?.id,
      };
    } else if (type === ElectricalComponentType.Bulb) {
      node = {
        id: uuid(),
        type,
        position,
        data: { value: 12 },
        parentId: board?.id,
      };
    } else if (type === ElectricalComponentType.Battery) {
      node = {
        id: uuid(),
        type,
        position,
        data: { value: 12 },
        parentId: board?.id,
      };
    } else if (type === ElectricalComponentType.Board) {
      node = {
        id: uuid(),
        type,
        position,
        data: {},
        style: { height: 200, width: 200 },
      };
    } else if (type == ElectricalComponentType.ThermalRelayLR2){
      node = {
        id: uuid(),
        type,
        position,
        data: { value: 15},
      };
    } else if (type == ElectricalComponentType.ContactorLS1){
      node = {
        id: uuid(),
        type,
        position,
        data: { value: 15},
      };
    } else if(type == ElectricalComponentType.ContactorLC1){
      node = {
        id: uuid(),
        type,
        position,
        data: { value: 15},
      };
    } else if(type == ElectricalComponentType.ContactorDN){
      node = {
        id: uuid(),
        type,
        position,
        data: { value: 15},
      };
    } else if(type == ElectricalComponentType.CircuitBreaker32A){
      node = {
        id: uuid(),
        type,
        position,
        data: { value: 15},
      };
    }

    if (node) addNode(node);
  };

  const [selectedNode, setSelectedNode] = useState<Node | undefined>();

  const onNodeClick = (event: React.MouseEvent<Element>, node: Node) => {
    setSelectedNode(node);
  };

  const onPaneClick = () => {
    setSelectedNode(undefined);
  };

  const edgeReconnectSuccessful = useRef(false);

  const onReconnectStart = () => {
    edgeReconnectSuccessful.current = false;
  };

  const onReconnect: OnReconnect = (oldEdge, newConnection) => {
    edgeReconnectSuccessful.current = true;
    setEdges((prevEdges) => reconnectEdge(oldEdge, newConnection, prevEdges));
  };

  const onReconnectEnd = (_: MouseEvent | TouchEvent, edge: Edge) => {
    if (!edgeReconnectSuccessful.current) {
      removeEdge(edge);
    }
  };

  const overlappingNodeRef = useRef<Node | null>(null);

  const showContent = useStore(zoomSelector);

  const onNodeDrag: OnNodeDrag = (evt, dragNode) => {
    const overlappingNode = getIntersectingNodes(dragNode)?.[0];
    overlappingNodeRef.current = overlappingNode;

    setNodes((prevNodes) =>
      prevNodes.map((node) => {
        if (node.id === dragNode.id) {
          return {
            ...node,
            data: {
              ...node.data,
              state:
                overlappingNode &&
                [
                  ElectricalComponentType.Capacitor,
                  ElectricalComponentType.Resistor,
                  ElectricalComponentType.Inductor,
                ].includes(
                  overlappingNode?.data?.type as ElectricalComponentType
                )
                  ? overlappingNode?.data?.type === dragNode?.data?.type
                    ? ElectricalComponentState.Add
                    : ElectricalComponentState.NotAdd
                  : undefined,
            },
          };
        }
        return node;
      })
    );
  };

  const onNodeDragStop: OnNodeDrag = (evt, dragNode) => {
    if (
      !overlappingNodeRef.current ||
      (overlappingNodeRef?.current?.type !== ElectricalComponentType.Board &&
        dragNode?.parentId)
    ) {
      setNodes((prevNodes) => {
        const board = prevNodes?.find(
          (prevNode) => prevNode.id === dragNode?.parentId
        );

        return prevNodes.map((node) => {
          if (node.id === dragNode.id) {
            const { x, y } = board?.position || { x: 0, y: 0 };
            const { x: dragX, y: dragY } = dragNode?.position || { x: 0, y: 0 };

            const position = { x: dragX + x, y: dragY + y };

            return { ...node, position, parentId: undefined };
          }
          return node;
        });
      });
    }

    if (
      [
        ElectricalComponentType.Capacitor,
        ElectricalComponentType.Resistor,
        ElectricalComponentType.Inductor,
      ].includes(
        overlappingNodeRef?.current?.data?.type as ElectricalComponentType
      ) &&
      dragNode?.data?.type === overlappingNodeRef?.current?.data?.type
    ) {
      setNodes((prevNodes) =>
        prevNodes
          .map((node) => {
            if (node.id === overlappingNodeRef?.current?.id) {
              return {
                ...node,
                data: {
                  ...node?.data,
                  value:
                    (dragNode?.data?.value as number) +
                    (node?.data?.value as number),
                },
              };
            }
            return node;
          })
          .filter((node) => node.id !== dragNode?.id)
      );
    }

    if (overlappingNodeRef?.current?.type === ElectricalComponentType.Board) {
      setNodes((prevNodes) => [
        overlappingNodeRef?.current as Node,
        ...prevNodes
          .filter((node) => node.id !== overlappingNodeRef?.current?.id)
          .map((node) => {
            if (node.id === dragNode?.id) {
              const { x, y } = overlappingNodeRef?.current?.position || {
                x: 0,
                y: 0,
              };
              const { x: dragX, y: dragY } = dragNode?.position || {
                x: 0,
                y: 0,
              };

              let position;
              if (!node.parentId) {
                position = { x: dragX - x, y: dragY - y };
              } else if (
                node.parentId &&
                node?.parentId !== overlappingNodeRef?.current?.id
              ) {
                const prevBoard = prevNodes?.find(
                  (node) => node?.id === dragNode?.parentId
                );
                const { x: prevBoardX, y: prevBoardY } =
                  prevBoard?.position || {
                    x: 0,
                    y: 0,
                  };
                position = {
                  x: dragX + prevBoardX - x,
                  y: dragY + prevBoardY - y,
                };
              }

              return {
                ...node,
                parentId: overlappingNodeRef?.current?.id,
                ...((!dragNode?.parentId ||
                  dragNode?.parentId !== overlappingNodeRef?.current?.id) && {
                  position,
                }),
                draggable: showContent,
                selectable: showContent,
                data: {
                  ...node.data,
                  visible: showContent,
                  connectable: showContent,
                },
              };
            }
            return node;
          }),
      ]);
    }
  };

  useKeyBindings({ removeNode, undo, redo });

  useEffect(() => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => {
        if (node.parentId) {
          return {
            ...node,
            draggable: showContent,
            selectable: showContent,
            data: {
              ...node.data,
              visible: showContent,
              connectable: showContent,
            },
          };
        }
        return {
          ...node,
          ...node,
          draggable: true,
          selectable: true,
          data: {
            ...node.data,
            visible: true,
            connectable: true,
          },
        };
      })
    );
  }, [showContent]);

  const { mutateAsync: saveFlow, isPending } = useUpdateData();
  const { data: reactFlowState } = useData();

  useEffect(() => {
    if (reactFlowState) {
      const { x = 0, y = 0, zoom = 1 } = reactFlowState.viewport;
      setNodes(reactFlowState.nodes || []);
      setEdges(reactFlowState.edges || []);
      setViewport({ x, y, zoom });
    }
  }, [reactFlowState]);

  const [rfInstance, setRfInstance] = useState<ReactFlowInstance<
    Node,
    Edge
  > | null>(null);

  const onSave = () => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      saveFlow(flow);
    }
  };

  const { isDark, toggleMode } = useDarkMode();

  return (
    <Box
      height={"100vh"}
      width="100vw"
      border="1px solid black"
      position="relative"
    >
      {selectedNode && (
        <Flex
          position={"absolute"}
          top={0}
          left={0}
          height="100%"
          width="150px"
          alignItems={"center"}
          bg="transparent"
          marginLeft="12px"
        >
          <Box
            bg="white"
            border="1px solid #ccc"
            borderRadius="12px"
            height="150px"
            width="100%"
            padding="12px"
            marginBottom="50px"
            position={"relative"}
            zIndex={1000}
          >
            <ComponentDetail node={selectedNode} key={selectedNode.id} />
          </Box>
        </Flex>
      )}
      <MenuBar />
      <UserGrades/>
      
      <ReactFlow
        onInit={setRfInstance}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        // connectionMode={ConnectionMode.Strict}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        connectionLineComponent={ConnectionLine}
        isValidConnection={isValidConnection}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        onReconnectStart={onReconnectStart}
        onReconnect={onReconnect}
        onReconnectEnd={onReconnectEnd}
        onNodeDrag={onNodeDrag}
        onNodeDragStop={onNodeDragStop}
        colorMode={isDark ? "dark" : "light"}
      >
        <Panel position="top-center">
          <IconButton
            icon={isDark ? <Sun /> : <Moon />}
            aria-label="Light/Dark Mode"
            size="xs"
            colorScheme={isDark ? "orange" : "blackAlpha"}
            onClick={toggleMode}
          />
        </Panel>
        <Panel
          position="top-right"
          style={{
            border: "1px solid #ccc",
            padding: 20,
            borderRadius: 12,
            background: "white",
            width: 280,
            height: 400,
          }}
        >
          <div style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            marginBottom: 25
          }}>
            <img src={Numeric} alt="Numeric" width="80px" height="80px"></img>
          </div>
          <Flex direction={"column"} gap={5}>
            <div>
              <Text fontSize="x-medium">Actemium ElecSim Tools</Text>
              <Flex mt={1} gap={3} flexWrap="wrap">
                <IconButton
                  icon={isPending ? <Spinner size="sm" /> : <Floppy />}
                  aria-label="Save"
                  size="sm"
                  onClick={onSave}
                />
                <DownloadBtn />
              </Flex>
            </div>

            <div>
              <Text fontSize="x-medium">Actemium ElecSim Components</Text>
              <Flex mt={1} gap={1} flexWrap="wrap">
                {COMPONENTS.map((component) => (
                  <IconButton
                    size="sm"
                    key={component.label}
                    aria-label={component.label}
                    icon={component.icon}
                    onDragStart={(event) => onDragStart(event, component.type)}
                    draggable
                  />
                ))}
              </Flex>
            </div>
          </Flex>
        </Panel>
        <Background
          variant={BackgroundVariant.Lines}
          gap={10}
          color="#f1f1f1"
          id="1"
        />
        <Background
          variant={BackgroundVariant.Lines}
          gap={100}
          color="#ccc"
          id="2"
        />
        <Controls />
        <svg>
          <defs>
            <linearGradient id="wire">
              <stop offset="0%" stopColor="#ecff02" />
              <stop offset="100%" stopColor="#f69900" />
            </linearGradient>
          </defs>
        </svg>
      </ReactFlow>
    </Box>
  );
};
