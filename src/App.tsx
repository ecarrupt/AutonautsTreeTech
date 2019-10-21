import React from 'react';
import { Navbar, Tab, Tabs } from "@blueprintjs/core";
import './App.css';
import ItemsPanel from "./components/ItemsPanel";
import ReceipePanel from "./components/RecipesPanel";

function App() {
return (
  <Navbar>
    <Navbar.Group>
                        <Navbar.Heading>
                            Autonauts Tech Tree
                        </Navbar.Heading>
                    </Navbar.Group>
    <Navbar.Group>
    <Tabs id="TabsExample" renderActiveTabPanelOnly={true} large={true}>
      <Tab id="items" title="Item List"/>
      <Tab id="recipes" title="Recipes"/>
      <Tabs.Expander />
    </Tabs>
    </Navbar.Group>
  </Navbar>);
}

export default App;
