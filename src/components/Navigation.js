import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

function Navigation(props) {
  return (
    <div className={classes.box}>
      <Link to="/">
        <span className={classes.navItem}>Calculator</span>
      </Link>
      <Link to="/workout">
        <span className={classes.navItem}>Workout schedule</span>
      </Link>
    </div>
  );
}

export default Navigation;
