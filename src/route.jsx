import App from "./Page/app.jsx";
import Add from "./Page/add.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}