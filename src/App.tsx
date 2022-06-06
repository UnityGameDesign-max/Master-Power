import React from 'react';
import './styles/App.css';
import {NavigationBar} from './components/NavigationBar';
import {Main} from './pages/Main';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Main />
    </div>
  );
}

export default App;
