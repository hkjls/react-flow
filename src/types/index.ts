export enum ElectricalComponentType {
  Resistor = "resistor",
  Capacitor = "capacitor",
  Bulb = "bulb",
  Inductor = "inductor",
  Battery = "battery",
  Board = "board",
  CircuitBreaker32A = "circuitbreaker",
  ContactorDN = "contactordn",
  ContactorLC1 = "contactorlci",
  ContactorLS1 = "contactorlsi",
  ThermalRelayLR2 = "thermalrelay", //number and signs exclude
  SupportElec = "supportelec",
  SocketElecII = "socketelecii",
}

export enum ElectricalComponentState {
  Add = "add",
  NotAdd = "notAdd",
}

export type ElectricalComponentData = {
  value?: number;
  type?: ElectricalComponentType;
  rotation?: number;
  state?: ElectricalComponentState;
  isAttachedToGroup?: boolean;
  visible?: boolean;
  connectable?: boolean;
};

export enum HistoryAction {
  AddNode = "addNode",
  RemoveNode = "removeNode",
  AddEdge = "addEdge",
  RemoveEdge = "removeEdge",
}
