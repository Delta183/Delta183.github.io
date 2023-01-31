import React from 'react';
import './App.css';

// When using any bootstrap from react-bootstrap, this import is a prerequisite
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/HomeComponent';
// import WorksComponent from './components/WorksComponent';
// import { Routes, Route, BrowserRouter as Router  } from 'react-router-dom'
// import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
   <div>
    {/* <Router>
      <NavbarComponent/>
      <Routes>
          <Route path="/" element={<HomeComponent/>} />
          <Route path="/work" element={<WorksComponent />} />
      </Routes>
    </Router> */}
    <HomeComponent/>
   </div>
  );
}

export default App;
