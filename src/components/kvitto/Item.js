import classes from './Item.module.css';

function Item(props) {
	return (
		<div className={classes.item} onClick={() => props.onRemove(props.id)}>
			<p>{props.index}.</p>
			<p>{props.name}</p>
			<p>{props.price} SEK</p>
		</div>
	);
}

export default Item;
