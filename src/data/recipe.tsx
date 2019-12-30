export interface RecipeInput {
  itemId: string;
  quantity: number;
  isConsumed: boolean;
}

export interface RecipeOutput {
  itemId: string;
  quantity: number;
}

export interface Recipe {
  id: string;
  name: string;
  inputs: RecipeInput[];
  outputs: RecipeOutput[];
  comment: string;
}

const recipes: Recipe[] = [
  {
    id: "plank",
    name: "Plank",
    inputs: [
      { itemId: "axe", quantity: 1, isConsumed: false },
      { itemId: "log", quantity: 1, isConsumed: true }
    ],
    outputs: [{ itemId: "plank", quantity: 2 }],
    comment: "1st one"
  }
];

export default recipes;
