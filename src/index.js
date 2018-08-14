import React from 'react';
import { render } from 'react-dom';

import { store } from './store/';
import AppContainer from './containers/AppContainer';

render(<AppContainer store={store} />, document.getElementById('root'));
