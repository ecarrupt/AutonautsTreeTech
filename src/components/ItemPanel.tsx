import React from "react";
import Items, { Item } from "../data/item";
import Recipes, { Recipe, RecipeInput, RecipeOutput } from "../data/recipe";
import { Card, H3, H2, H5, H1, H4 } from "@blueprintjs/core";
import { useParams, NavLink } from "react-router-dom";

const ItemPanel: React.FC = () => {
  let { itemId } = useParams();

  let item = Items.find(i => i.id === itemId!)!;
  let usedIn = Recipes.filter(r => r.inputs.some(i => i.itemId === item.id));
  let produced = Recipes.filter(r => r.outputs.some(i => i.itemId === item.id));

  const getItemFigure = (currentItem: Item, quantity: number) => {
    if (currentItem.id !== item.id) {
      return (
        <NavLink
          style={{ textDecoration: "inherit", color: "inherit" }}
          to={"/item/" + currentItem.id}
        >
          <Card interactive style={{ margin: "2px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "stretch",
                alignItems: "center",
                color: currentItem.id === item.id ? "blue" : "black"
              }}
            >
              <b>{currentItem.name}</b>
              <img
                alt={currentItem.icon}
                src={"/itemIcon/" + currentItem.icon}
                width="128px"
                height="128px"
              />
              <H4>{quantity}</H4>
            </div>
          </Card>
        </NavLink>
      );
    } else {
      return (
        <Card style={{ margin: "2px" }} elevation={3}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "stretch",
              alignItems: "center",
              color: currentItem.id === item.id ? "blue" : "black"
            }}
          >
            <b>{currentItem.name}</b>
            <img
              alt={currentItem.icon}
              src={"/itemIcon/" + currentItem.icon}
              width="128px"
              height="128px"
            />
            <H4>{quantity}</H4>
          </div>
        </Card>
      );
    }
  };

  const getInputItemFigure = (
    input: RecipeInput,
    index: number,
    array: RecipeInput[]
  ) => {
    let currentItem = Items.find(i => i.id === input.itemId)!;
    return (
      <>
        {getItemFigure(currentItem, input.quantity)}
        {index !== array.length - 1 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              margin: "5px"
            }}
          >
            <H1>+</H1>
          </div>
        )}
      </>
    );
  };

  const getOutputItemFigure = (
    input: RecipeOutput,
    index: number,
    array: RecipeOutput[]
  ) => {
    let currentItem = Items.find(i => i.id === input.itemId)!;
    return (
      <>
        {getItemFigure(currentItem, input.quantity)}
        {index !== array.length - 1 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              margin: "5px"
            }}
          >
            <H1>+</H1>
          </div>
        )}
      </>
    );
  };

  const getRecipeLine = (recipe: Recipe) => {
    return (
      <div style={{ margin: "10px" }}>
        <H5>{recipe.name}</H5>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {recipe.inputs.map((i, index, array) =>
            getInputItemFigure(i, index, array)
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              margin: "5px"
            }}
          >
            <H1>=></H1>
          </div>
          {recipe.outputs.map((o, index, array) =>
            getOutputItemFigure(o, index, array)
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <H2>Item {item.name}</H2>
      {usedIn.length > 0 && (
        <>
          <H3>Used In</H3>
          {usedIn.map(r => getRecipeLine(r))}
        </>
      )}
      {produced.length > 0 && (
        <>
          <H3>Produced</H3>
          {produced.map(r => getRecipeLine(r))}
        </>
      )}
    </div>
  );
};

export default ItemPanel;
