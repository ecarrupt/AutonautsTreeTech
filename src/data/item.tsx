export enum ItemType {
  Ressource = "Ressource",
  Building = "Building",
  Tool = "Tool",
  Soil = "Soil"
}

export interface Item {
  id: string;
  name: string;
  type: ItemType;
  icon: string;
}

const Items: Item[] = [
  { id: "plank", name: "Plank", type: ItemType.Ressource, icon: "logo192.png" },
  { id: "log", name: "Log", type: ItemType.Ressource, icon: "logo192.png" },
  { id: "axe", name: "Axe", type: ItemType.Tool, icon: "logo512.png" },
  {
    id: "chopper",
    name: "Chopper",
    type: ItemType.Building,
    icon: "logo192.png"
  }
];

export default Items;
