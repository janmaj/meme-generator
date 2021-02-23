import React from "react";
import { Switch, Route } from "react-router-dom";

import TemplatePicker from "./pages/TemplatePicker/TemplatePicker";
import Editor from "./pages/Editor/Editor";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={TemplatePicker} />
        <Route path="/editor" exact component={Editor} />
      </Switch>
    </div>
  );
}

export default App;
