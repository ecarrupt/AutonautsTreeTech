export interface RecipeInput {
  itemID: string;
  quantity: number;
  isConsumed: boolean;
}

export interface RecipeOutput {
  itemID: string;
  quantity: number;
}

export interface Recipe {
  recipeID: string;
  name: string;
  inputs: RecipeInput[];
  outputs: RecipeOutput[];
  comment: string;
}

const recipes: Recipe[] = [
  {
    recipeID: "plank",
    name: "Plank",
    inputs: [
      { itemID: "axe", quantity: 1, isConsumed: false },
      { itemID: "log", quantity: 1, isConsumed: true }
    ],
    outputs: [{ itemID: "plank", quantity: 2 }],
    comment: "1st one"
  }
];

export default recipes;
