import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'


import routes from './modules/routes'

render(
	<Router routes={routes} browserHistory={browserHistory} />,
	document.getElementById('app')
)
