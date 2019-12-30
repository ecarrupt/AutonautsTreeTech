import React from "react";
import { Navbar, Tab, Tabs, Alignment } from "@blueprintjs/core";
import "./App.css";
import ItemsPanel from "./components/ItemsPanel";
import ReceipesPanel from "./components/RecipesPanel";
import ItemPanel from "./components/ItemPanel";
import { Switch, Route, Link, useLocation } from "react-router-dom";

interface TabProps {
  path: string;
  title: string;
}

const TabList: TabProps[] = [
  {
    path: "/items",
    title: "Item List"
  },
  {
    path: "/receipes",
    title: "Receipes"
  }
];

const MainPage: React.FC = () => {
  let location = useLocation();

  const tabs = TabList.map((tab, key) => (
    <Tab
      title={
        <Link to={tab.path} key={key}>
          <div key={tab.path}>{tab.title}</div>
        </Link>
      }
      id={tab.path}
    />
  ));

  return (
    <>
      <Navbar>
        <Navbar.Group>
          <Navbar.Heading>Autonauts Tech Tree</Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.LEFT}>
          <Tabs id="navbar" large={true} selectedTabId={location.pathname}>
            {tabs}
            <Tabs.Expander />
          </Tabs>
        </Navbar.Group>
      </Navbar>
      <Switch>
        <Route path="/items">
          <ItemsPanel />
        </Route>
        <Route path="/receipes">
          <ReceipesPanel />
        </Route>
        <Route path="/item/:itemId">
          <ItemPanel />
        </Route>
      </Switch>
    </>
  );
};

export default MainPage;
