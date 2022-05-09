import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="App container-fluid p-0">
        <Navbar/>
        <Content/>
    </div>
  );
}

export default App;
