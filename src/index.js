import React from 'react';
import {render} from 'react-dom';

import App from './App.js';
import Add from './Add.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();



render(<Add />, document.getElementById('root'));
