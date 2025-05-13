export enum ElectricalComponentType {
  Resistor = "resistor",
  Capacitor = "capacitor",
  Bulb = "bulb",
  Inductor = "inductor",
  Battery = "battery",
  Board = "board",
  CircuitBreaker32A = "circuitbreaker",
  CircuitBreaker32AN = "circuitbreakern",
  ContactorDN = "contactordn",
  ContactorLC1 = "contactorlci",
  ContactorLS1 = "contactorlsi",
  ThermalRelayLR2 = "thermalrelay", //number and signs exclude
  SupportElec = "supportelec",
  SocketElecII = "socketelecii",
  ButtonRedI = "buttonredi",
  ButtonRedII = "buttonredii",
  ButtonRedIII = "buttonrediii",
  ButtonGreen = "buttongreen",
  MiniSocket = "minisocket",
  DMM = "dmm",
  DMT = "dmt",
  RDS = "rds",
}

export enum ElectricalComponentState {
  Add = "add",
  NotAdd = "notAdd",
}

export type ElectricalComponentData = {
  value?: number;
  nEntry?: number;
  nOutput?: number;
  Desc?: string;
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
