import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';
import Nav from './Navigation';
import PetsPage from '../pages/Pets/PetsPage';
// import PetPage from '../pages/Pet/PetPage';
import './App.css';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route path="/" exact component={HomePage}></Route>
      {/* <Route path="/pets/:id" exact component={PetPage}></Route> */}
      <Route path="/pets" exact component={PetsPage}></Route>
      <Route path="/about" exact component={AboutPage}></Route>
    </Switch>
  </div>
);

export default App;
