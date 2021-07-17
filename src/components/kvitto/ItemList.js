import Item from "./Item";
import classes from "./ItemList.module.css";

function ItemList(props) {
  return (
    <div className={classes.box}>
      {props.items.map((item, index) => (
        <Item
          key={item.id}
          id={item.id}
          index={index + 1}
          name={item.name}
          price={item.price}
          onRemove={props.onRemove}
        />
      ))}
    </div>
  );
}

export default ItemList;
