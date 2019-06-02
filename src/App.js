import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header'
import Game from './components/games/game';
import GameInfo from './components/games/game-info';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route exact path='/' component={Game} />
      <Route exact path='/gameinfo/:name' component={GameInfo} />
    </BrowserRouter>
  );
}

export default App;
