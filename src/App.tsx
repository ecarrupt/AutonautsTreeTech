import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./MainPage";
import items from "./data/item";
import { Button } from "@blueprintjs/core";
import recipes from "./data/recipe";

const App: React.FC = () => {
  /*const [state, setState] = useState({
    response: "",
    post: "",
    responseToPost: ""
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: state.post })
    });
    const body = await response.text();
    let newState = produce(state, draft => {
      draft.responseToPost = body;
    });
    setState(newState);
  };

  const postApi = async (e: any) => {
    const response = await fetch("/api/item?id=" + items[2].itemID, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(items[2])
    });
  };

  const callApi = async () => {
    const response = await fetch("/api/item?id=plank");

    if (response.status !== 200) throw Error("oups");
    const body = await response.json();
    console.log(body);
    return body;
  };

  postApi(null);*/

  return (
    <Router>
      <MainPage />
    </Router>
  );
};

export default App;
