import { Edge, Node } from "@xyflow/react";
import { ElectricalComponentType } from "../types";
import {
  CircuitBreaker32A,
  CircuitBreaker32AN,
  ContactorDN,
  ContactorLC1,
  ContactorLS1,
  ThermalRelayLR2,
  SupportElec,
  SocketElecII,
  ButtonRed1,
  ButtonRed2,
  ButtonRed3,
  ButtonGreen,
  MiniSocket,
  DMM,
  DMT,
  RDS,
  CM,
  MT
} from "../icons";
import { Box, Icon } from "@chakra-ui/react";

export const initialEdges: Edge[] = [
  
];

export const initialNodes: Node[] = [
  // {
  //   id: "1",
  //   position: { x: 100, y: 100 },
  //   type: "electricalComponent",
  //   data: { type: ElectricalComponentType.Resistor, value: 3 },
  // },
  // {
  //   id: "2",
  //   position: { x: 200, y: 200 },
  //   type: "electricalComponent",
  //   data: { type: ElectricalComponentType.Capacitor, value: 3 },
  // },
  // {
  //   id: "3",
  //   position: { x: 300, y: 300 },
  //   type: "electricalComponent",
  //   data: { type: ElectricalComponentType.Inductor, value: 3 },
  // }
];

export const COMPONENTS = [
  // {
  //   icon: <Resistor />,
  //   type: ElectricalComponentType.Resistor,
  //   label: "Resistor",
  // },
  // {
  //   icon: <Capacitor height={16} />,
  //   type: ElectricalComponentType.Capacitor,
  //   label: "Capacitor",
  // },
  // {
  //   icon: <Inductor height={8} />,
  //   type: ElectricalComponentType.Inductor,
  //   label: "Inductor",
  // },
  // {
  //   icon: <Battery height={24} />,
  //   type: ElectricalComponentType.Battery,
  //   label: "Battery",
  // },

  // {
  //   icon: <Bulb color="black" height={24} isOn />,
  //   type: ElectricalComponentType.Bulb,
  //   label: "Bulb",
  // },
  {
    icon: (
      <Box
        height="18px"
        width="18px"
        borderRadius="4px"
        border="1px solid black"
      ></Box>
    ),
    type: ElectricalComponentType.Board,
    label: "Board",
  },
  {
    icon: <CircuitBreaker32A height={24}/>,
    type: ElectricalComponentType.CircuitBreaker32A,
    label: "CircuitBreaker32A"
  },
  {
    icon: <CircuitBreaker32AN height={24}/>,
    type: ElectricalComponentType.CircuitBreaker32AN,
    label: "CircuitBreaker32AN"
  },
  {
    icon: <ContactorDN height={24} />,
    type: ElectricalComponentType.ContactorDN,
    label: "ContactorDN"
  },
  {
    icon: <ContactorLC1 height={24} />,
    type: ElectricalComponentType.ContactorLC1,
    label: "ContactorLC1"
  },
  {
    icon: <ContactorLS1 height={24} />,
    type: ElectricalComponentType.ContactorLS1,
    label: "ContactorLS1"
  },
  {
    icon: <ThermalRelayLR2 height={24} />,
    type: ElectricalComponentType.ThermalRelayLR2,
    label: "ThermalRelayR2"
  },
  {
    icon: <SupportElec height={24} />,
    type: ElectricalComponentType.SupportElec,
    label: "SupportElec"
  },
  {
    icon: <SocketElecII height={24} />,
    type: ElectricalComponentType.SocketElecII,
    label: "SocketElec"
  },
  {
    icon: <ButtonRed1 height={24} />,
    type: ElectricalComponentType.ButtonRedI,
    label: "ButtonRed1"
  },
  {
    icon: <ButtonRed2 height={24} />,
    type: ElectricalComponentType.ButtonRedII,
    label: "ButtonRed2"
  },
  {
    icon: <ButtonRed3 height={24} />,
    type: ElectricalComponentType.ButtonRedIII,
    label: "ButtonRed3"
  },
  {
    icon: <ButtonGreen height={24} />,
    type: ElectricalComponentType.ButtonGreen,
    label: "ButtonGreen"
  },
  {
    icon: <MiniSocket height={8} />,
    type: ElectricalComponentType.MiniSocket,
    label: "MiniSocket"
  },
  {
    icon: <DMM height={30} />,
    type: ElectricalComponentType.DMM,
    label: "DMM"
  },
  {
    icon: <DMT height={28} />,
    type: ElectricalComponentType.DMT,
    label: "DMT"
  },
  {
    icon: <RDS height={28} />,
    type: ElectricalComponentType.RDS,
    label: "RDS"
  },
  {
    icon: <CM height={28} />,
    type: ElectricalComponentType.CM,
    label: "RDS"
  },
  {
    icon: <MT height={28} />,
    type: ElectricalComponentType.MT,
    label: "RDS"
  }
];
