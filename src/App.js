import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Calculator from "./pages/Calculator";
import Workout from "./pages/Workout";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Navigation />
      <Switch>
        <Route path="/" component={Calculator} exact />
        <Route path="/workout" component={Workout} />
      </Switch>
      <div />
    </div>
  );
}

export default App;
