import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import KDLSider from './components/Sider';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <KDLSider />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
