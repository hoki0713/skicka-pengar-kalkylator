import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { KvittosContextProvider } from './store/kvittos-context';

ReactDOM.render(
	<KvittosContextProvider>
		<App />
	</KvittosContextProvider>,
	document.getElementById('root')
);
