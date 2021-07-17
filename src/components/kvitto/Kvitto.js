import TotalPrice from "./TotalPrice";
import Input from "./Input";
import ItemList from "./ItemList";
import classes from "./Kvitto.module.css";

function Kvitto(props) {
  return (
    <div className={classes.KvittoBox}>
      <h2>{props.title}</h2>
      <h3>
        Total Price: <TotalPrice total={props.total} rate={props.rate} />
      </h3>
      <Input onAdd={props.onAdd} />
      <ItemList items={props.items} onRemove={props.onRemove} />
    </div>
  );
}

export default Kvitto;
