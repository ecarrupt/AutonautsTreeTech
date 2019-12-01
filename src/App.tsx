import React, { useState } from 'react';
import { Navbar, Tab, Tabs, Alignment } from "@blueprintjs/core";
import './App.css';
import ItemsPanel from "./components/ItemsPanel";
import ReceipesPanel from "./components/RecipesPanel";
import {produce} from "immer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

interface AppState{
  navbarTabId: string
}

interface TabProps{
  path: string;
  title: string;
}

const TabList: TabProps[] = [
  {
    path: "items",
    title: "Item List"
  },
  {
    path: "receipes",
    title: "Receipes"
  }
]

const App : React.FC = () => {
  const [state, setState] = useState<AppState>({
    navbarTabId: "items" 
  });



  const handleNavbarTabChange = (navbarTabId: string) => {
    let newState = produce(state, draft => {
      draft.navbarTabId = navbarTabId;
    })
    setState(newState);
  };

  const tabs = TabList.map((tab, key) => (
		<Tab title={
			<Link to={tab.path} key={key}>
				<div
					key={tab.path}
					onClick={() => handleNavbarTabChange(tab.path)}
				>
					{tab.title}
				</div>
			</Link>
		} id={tab.path}/>
	))

return (
  <Router>
  <Navbar>
    <Navbar.Group>
        <Navbar.Heading>
            Autonauts Tech Tree
        </Navbar.Heading>
    </Navbar.Group>
    <Navbar.Group align={Alignment.LEFT}>
    <Tabs id="navbar" renderActiveTabPanelOnly={true} large={true} selectedTabId={state.navbarTabId} onChange={handleNavbarTabChange}>
      {tabs}
      <Tabs.Expander />
    </Tabs>
    </Navbar.Group>
  </Navbar>
  <Switch>
    <Route path="/items">
      <ItemsPanel/>
    </Route>
    <Route path="/receipes">
      <ReceipesPanel/>
    </Route>
  </Switch>
  </Router>);
}

export default App;
