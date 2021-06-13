import { useContext } from 'react';

import Kvito from './components/Kvito';
import KvittosContext from './store/kvittos-context';
import classes from './App.module.css';

function App() {
	const kvittosCtx = useContext(KvittosContext);

	return (
		<div className={classes.app}>
			<h1>
				Hur mycket pengar ska Hojeong skicka?{' '}
				<span>{kvittosCtx.twoDecimal(kvittosCtx.hojeongTotal)} SEK</span>
			</h1>
			<div className={classes.kvittoBox}>
				<Kvito
					title="Mat Saker"
					rate="0.25"
					total={kvittosCtx.matTotal}
					items={kvittosCtx.matKvittos}
					onAdd={kvittosCtx.addMatKvitto}
					onRemove={kvittosCtx.removeMatKvitto}
				/>
				<Kvito
					title="Annat"
					rate="0.5"
					total={kvittosCtx.annatTotal}
					items={kvittosCtx.annatKvittos}
					onAdd={kvittosCtx.addAnnatKvitto}
					onRemove={kvittosCtx.removeAnnatKvitto}
				/>
			</div>
		</div>
	);
}

export default App;
