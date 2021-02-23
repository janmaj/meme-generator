import React from "react";
import { Switch, Route } from "react-router-dom";

import TemplatePicker from "./pages/TemplatePicker/TemplatePicker";
import Editor from "./pages/Editor/Editor";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={TemplatePicker} />
        <Route path="/editor" exact component={Editor} />
      </Switch>
    </div>
  );
}

export default App;
