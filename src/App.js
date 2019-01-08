import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/Header';
import TopHeader from './components/HeaderTop';
import Footer from './components/Footer';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main_container">
          <TopHeader />
          <Header />
          <Switch>
            {/* <Route exact path="/news/:id" component={News}/>
              <Route exact path="/galleries/:id" component={GalleryItem}/> */}
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
