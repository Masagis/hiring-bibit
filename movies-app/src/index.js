import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import globalStore from './redux/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={globalStore}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
