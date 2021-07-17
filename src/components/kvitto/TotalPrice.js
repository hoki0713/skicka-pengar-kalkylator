import { useContext } from "react";

import KvittosContext from "../../store/kvittos-context";
import classes from "./TotalPrice.module.css";

function TotalPrice(props) {
  const twoDecimal = useContext(KvittosContext).twoDecimal;

  let hojeong = 0;
  let lukas = 0;

  if (props.total) {
    hojeong = twoDecimal(props.total * props.rate);
    lukas = twoDecimal(props.total - hojeong);
  }

  return (
    <span>
      {twoDecimal(props.total)} SEK
      <div className={classes.detail}>
        <p className={classes.detailPrice}>Hojeong: {hojeong} SEK</p>
        <p className={classes.detailPrice}>Lukas: {lukas} SEK</p>
      </div>
    </span>
  );
}

export default TotalPrice;
