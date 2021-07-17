import { useState } from 'react';

import classes from './Input.module.css';

function Input(props) {
	const [itemName, setItemName] = useState('');
	const [itemPrice, setItemPrice] = useState('');

	function checkValidity(inputValue) {
		if (+inputValue >= 0 || inputValue === '') {
			return setItemPrice(inputValue);
		} else {
			return;
		}
	}

	function addHandler() {
		props.onAdd({ name: itemName, price: itemPrice });
		setItemName('');
		setItemPrice('');
	}

	function addWithEnterKey(e) {
		if (e.keyCode === 13) {
			e.preventDefault();
			addHandler();
		}
	}

	return (
		<div className={classes.inputBox}>
			<input
				className={classes.input}
				type="text"
				placeholder="What you bought?"
				value={itemName}
				onChange={(e) => setItemName(e.target.value)}
			/>
			<input
				className={classes.input}
				type="text"
				placeholder="How much money?"
				value={itemPrice}
				onChange={(e) => checkValidity(e.target.value)}
				onKeyUp={addWithEnterKey}
				required
			/>
			<button className={classes.btn} onClick={addHandler}>
				Enter
			</button>
		</div>
	);
}

export default Input;
