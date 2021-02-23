import * as React from "react";
import { Switch, Route } from "react-router-dom";

import TemplatePicker, {
  Template,
} from "./pages/TemplatePicker/TemplatePicker";
import Editor from "./pages/Editor/Editor";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [activeTemplate, setActiveTemplate] = React.useState<Template | null>(
    null
  );

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          path="/"
          exact
          render={() => <TemplatePicker onPick={setActiveTemplate} />}
        />
        <Route
          path="/editor"
          exact
          render={() => <Editor activeTemplate={activeTemplate} />}
        />
      </Switch>
    </div>
  );
}

export default App;
