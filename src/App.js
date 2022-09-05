import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Pages
import Home from './pages/Home';
import Donate from './pages/Donate';
import FundCause from './pages/FundCause';
import ListwithdrawCauses from './pages/ListwithdrawCauses';
import Withdraw from './pages/Withdraw';
import AddCause from './pages/AddCause';




const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listwithdrawcauses" element={<ListwithdrawCauses />} />
        <Route path="/addcause" element={<AddCause />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/fundcause" element={<FundCause />} />
      </Routes>


    </Router>
  )
}

export default App