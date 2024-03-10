import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'; // Adjust the path based on your project structure
import AuthForm from './components/Login';
import Train from './Pages/Train';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/trains" element={<Train />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
