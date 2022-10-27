import './App.css';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';


import Form from '../src/pages/Form'
import { Home } from './pages/Home/home';
import EditProduct from './pages/EditProduct';

export default function App() {
  return (
    <Router>
      <div className="App">

      </div >
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/form" exact element={<Form />} />
        <Route path="/edit/:id" exact element={<EditProduct />} />

      </Routes>

    </Router>
  );
}
