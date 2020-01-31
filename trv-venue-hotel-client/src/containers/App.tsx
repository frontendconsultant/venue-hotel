import React from 'react';
import '../assets/styles/sass/index.scss';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Rooms from '../pages/Rooms';
import SingleRoom from '../pages/SingleRoom';
import ErrorPage from '../pages/ErrorPage';
import SingleHotel from '../pages/SingleHotel';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hotel/:hotelId" component={SingleHotel} />
        <Route exact path="/rooms/:roomId" component={SingleRoom} />
        <Route component={ErrorPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
