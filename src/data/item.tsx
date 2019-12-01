export enum ItemType{
    Ressource = "Ressource",
    Building = "Building",
    Tool = "Tool",
    Soil = "Soil"
}

export interface Item{
    id: number,
    name: string,
    type: ItemType,
    icon: string,

}

const Items: Item[] = [
    {id: 1, name: "Plank", type: ItemType.Ressource, icon: "logo192.png"},
    {id: 2, name: "Log", type: ItemType.Ressource, icon: "logo192.png"},
    {id: 3, name: "Axe", type: ItemType.Tool, icon: "logo512.png"},
    {id: 4, name: "Chopper", type: ItemType.Building, icon: "logo192.png"},
]

export default Items;