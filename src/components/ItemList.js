import Item from './Item';

function ItemList(props) {
	return (
		<div>
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
