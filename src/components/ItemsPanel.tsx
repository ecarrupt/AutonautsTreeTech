import React from "react";
import Items, { Item, ItemType } from "../data/item";
import Receipes from "../data/recipe";
import { Card, H3, H2 } from "@blueprintjs/core";
import { $enum } from "ts-enum-util";
import { NavLink } from "react-router-dom";

const ItemsPanel: React.FC = () => {
  const getItemFigure = (item: Item) => {
    return (
      <NavLink
        style={{ textDecoration: "inherit", color: "inherit" }}
        to={"/item/" + item.id}
      >
        <Card interactive style={{ margin: "2px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "stretch",
              alignItems: "center"
            }}
          >
            <b>{item.name}</b>
            <img
              alt={item.icon}
              src={"/itemIcon/" + item.icon}
              width="128px"
              height="128px"
            />
            <p>
              {"Used in " +
                Receipes.filter(r => r.inputs.some(i => i.itemId === item.id))
                  .length +
                " receipe(s)"}
            </p>
            <p>
              {"Produce by " +
                Receipes.filter(r => r.outputs.some(i => i.itemId === item.id))
                  .length +
                " receipe(s)"}
            </p>
          </div>
        </Card>
      </NavLink>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <H2>Items</H2>
      {$enum(ItemType).map((type: ItemType) => (
        <div style={{ margin: "10px" }}>
          <H3>{type}</H3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {Items.filter(i => i.type === type).map(i => getItemFigure(i))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsPanel;
