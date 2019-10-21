export interface RecipeInput {
    itemId: number,
    quantity: number,
    isConsumed: boolean
}

export interface RecipeOutput {
    itemId: number,
    quantity: number
}

export interface Recipe {
    id: number,
    name: string,
    inputs: RecipeInput[],
    outputs: RecipeOutput[],
    comment: string
}

const recipes : Recipe[] = [
{id: 1, name: "Plank", inputs: [{itemId: 3, quantity: 1, isConsumed: false}, 
    {itemId: 2, quantity: 1, isConsumed: false}],
    outputs: [{itemId: 1, quantity: 2}], comment: "1st one"}
]

export default recipes;