import { useContext } from "react";

import Controller from "../components/kvitto/Controller";
import Kvitto from "../components/kvitto/Kvitto";
import KvittosContext from "../store/kvittos-context";

import classes from "./Calculator.module.css";

function Calculator(props) {
  const kvittosCtx = useContext(KvittosContext);

  return (
    <div className={classes.box}>
      <h1 className={classes.head}>
        Hur mycket pengar ska Hojeong skicka?{" "}
        <span>{kvittosCtx.twoDecimal(kvittosCtx.hojeongTotal)} SEK</span>
      </h1>
      <div className={classes.card}>
        <Controller
          matRate={kvittosCtx.matRate}
          annatRate={kvittosCtx.annatRate}
          onMatChange={kvittosCtx.changeMatRate}
          onAnnatChange={kvittosCtx.changeAnnatRate}
          total={kvittosCtx.totalPrice}
        />
      </div>
      <div className={classes.content}>
        <Kvitto
          title="Mat Saker"
          rate={kvittosCtx.matRate}
          total={kvittosCtx.matTotal}
          items={kvittosCtx.matKvittos}
          onAdd={kvittosCtx.addMatKvitto}
          onRemove={kvittosCtx.removeMatKvitto}
        />
        <Kvitto
          title="Annat"
          rate={kvittosCtx.annatRate}
          total={kvittosCtx.annatTotal}
          items={kvittosCtx.annatKvittos}
          onAdd={kvittosCtx.addAnnatKvitto}
          onRemove={kvittosCtx.removeAnnatKvitto}
        />
      </div>
    </div>
  );
}

export default Calculator;
