import React from 'react';
import ReactDOM from 'react-dom';
import { HotelProvider } from './store/hotelContext';
import { HashRouter as Router } from 'react-router-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<HotelProvider>
    <Router>
        <App />
    </Router>
</HotelProvider>, 
document.getElementById('root'));

serviceWorker.unregister();
