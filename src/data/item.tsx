export enum ItemType {
  Ressource = "Ressource",
  Building = "Building",
  Tool = "Tool",
  Soil = "Soil"
}

export interface Item {
  itemID: string;
  name: string;
  type: ItemType;
  icon: string;
}

const items: Item[] = [
  {
    itemID: "plank",
    name: "Plank",
    type: ItemType.Ressource,
    icon: "logo192.png"
  },
  { itemID: "log", name: "Log", type: ItemType.Ressource, icon: "logo192.png" },
  { itemID: "axe", name: "Axe", type: ItemType.Tool, icon: "logo512.png" },
  {
    itemID: "chopper",
    name: "Chopper",
    type: ItemType.Building,
    icon: "logo192.png"
  }
];

export default items;
