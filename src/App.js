import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/header';
import TopHeader from './components/header_top';
import Footer from './components/footer';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main_container">
            <TopHeader/>
            <Header/>
            <Switch>
              {/* <Route exact path="/news/:id" component={News}/>
              <Route exact path="/galleries/:id" component={GalleryItem}/> */}
              <Route exact path="/" component={Home}/>
            </Switch>
            <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
