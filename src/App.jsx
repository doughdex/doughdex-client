import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon.jsx';
import Landing from './pages/Landing.jsx';
import LogIn from './pages/LogIn.jsx';
import SignUp from './pages/SignUp.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        {/* <Route path="/login" element={<LogIn />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
