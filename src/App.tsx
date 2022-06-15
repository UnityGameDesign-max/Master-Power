import React from 'react';
import './styles/App.css';
import {NavigationBar} from './components/NavigationBar';
import {Main} from './pages/Main';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <Router>
          <NavigationBar />
        <Routes>
          <Route path='/' element={<Main stroke='' stroke1='' stroke3='' stroke4=''/>} />
        </Routes>
      </Router>
      <Main stroke='' stroke1 ='' stroke3='' stroke4=''/>
    </div>
  );
}

export default App;
