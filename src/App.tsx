import React from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
// When using any bootstrap from react-bootstrap, this import is a prerequisite
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div>
    <NavbarComponent/>
   </div>
  );
}

export default App;
