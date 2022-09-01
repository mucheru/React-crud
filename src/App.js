import logo from './logo.svg';
import './App.css';
import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import EditProduct from "./components/edit.component.js";
import ProductList from "./components/list.component.js";
import CreateProduct from "./components/create.component.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Navbar bg="primary">

        <Router>
        <Routes>
            <Route path="/category/create" element={<CreateProduct />} />
            <Route path="/category/edit/:id" element={<EditProduct />} />
            <Route exact path='/' element={<ProductList />} />
          </Routes>
          </Router>
          </Navbar>
      </header>
    </div>
  );
}

export default App;
