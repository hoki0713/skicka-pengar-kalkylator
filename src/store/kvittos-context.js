import { createContext, useState } from 'react';

const KvittosContext = createContext({
	totalPrice: 0,
	matTotal: 0,
	annatTotal: 0,
	hojeongTotal: 0,
	lukasTotal: 0,
	matKvittos: [],
	annatKvittos: [],
	addMatKvitto: (kvitto) => {},
	removeMatKvitto: (kvittoId) => {},
	addAnnatKvitto: (kvitto) => {},
	removeAnnatKvitto: (kvittoId) => {},
	twoDecimal: (number) => {},
});

export function KvittosContextProvider(props) {
	const [matTotal, setMatTotal] = useState(0);
	const [annatTotal, setAnnatTotal] = useState(0);
	const [matKvittos, setMatKvittos] = useState([]);
	const [annatKvittos, setAnnatKvittos] = useState([]);

	function addMatKvittoHandler(kvitto) {
		setMatKvittos((prevKvitto) => {
			return prevKvitto.concat({
				id: `mat-${matKvittos.length}`,
				...kvitto,
			});
		});
		setMatTotal((prevPrice) => +prevPrice + +kvitto.price);
	}

	function removeMatKvittoHandler(kvittoId) {
		const targetPrice = matKvittos.filter((kvitto) => kvitto.id === kvittoId)[0]
			.price;

		setMatKvittos((prevKvitto) => {
			return prevKvitto.filter((kvitto) => kvitto.id !== kvittoId);
		});
		setMatTotal((prevPrice) => +prevPrice - targetPrice);
	}

	function addAnnatKvittoHandler(kvitto) {
		setAnnatKvittos((prevKvitto) => {
			return prevKvitto.concat({
				id: `annat-${annatKvittos.length}`,
				...kvitto,
			});
		});
		setAnnatTotal((prevPrice) => +prevPrice + +kvitto.price);
	}

	function removeAnnatKvittoHandler(kvittoId) {
		const targetPrice = annatKvittos.filter(
			(kvitto) => kvitto.id === kvittoId
		)[0].price;

		setAnnatKvittos((prevKvitto) => {
			return prevKvitto.filter((kvitto) => kvitto.id !== kvittoId);
		});
		setAnnatTotal((prevPrice) => +prevPrice - targetPrice);
	}

	const context = {
		totalPrice: matTotal + annatTotal,
		matTotal: matTotal,
		annatTotal: annatTotal,
		hojeongTotal: matTotal * 0.25 + annatTotal * 0.5,
		lukasTotal: matTotal * 0.75 + annatTotal * 0.5,
		matKvittos: matKvittos,
		annatKvittos: annatKvittos,
		addMatKvitto: addMatKvittoHandler,
		removeMatKvitto: removeMatKvittoHandler,
		addAnnatKvitto: addAnnatKvittoHandler,
		removeAnnatKvitto: removeAnnatKvittoHandler,
		twoDecimal: (number) => {
			return Math.round(number * 100) / 100;
		},
	};

	return (
		<KvittosContext.Provider value={context}>
			{props.children}
		</KvittosContext.Provider>
	);
}

export default KvittosContext;
