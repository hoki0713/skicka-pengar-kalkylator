import classes from "./Controller.module.css";

function Controller(props) {
  return (
    <div className={classes.box}>
      <h2 className={classes.total}>Total : {props.total} SEK</h2>
      <div className={classes.mat}>
        <h3>Mat Rate</h3>
        <input
          value={props.matRate}
          onChange={(e) => props.onMatChange(e.target.value)}
        />
      </div>
      <div className={classes.annat}>
        <h3>Annat Rate</h3>
        <input
          value={props.annatRate}
          onChange={(e) => props.onAnnatChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Controller;
