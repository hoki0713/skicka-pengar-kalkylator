import useTodayWorkout from "../hooks/useTodayWorkout";

import Today from "../components/workout/Today";
import classes from "./Workout.module.css";

function Workout(props) {
  const [workout] = useTodayWorkout();

  return (
    <div className={classes.box}>
      <Today data={workout} className={classes.content} />
    </div>
  );
}

export default Workout;
