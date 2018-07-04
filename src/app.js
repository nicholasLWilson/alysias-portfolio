import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from  './components/Navbar';
import ClubSoda from './components/ClubSoda';
import Dove from './components/Dove';
import Home from './components/Home';
import './scss/style.scss';

class App extends React.Component {
  state = {
    currentPage: 'Home'
  }

  currentPage = () => {

  }

  render() {
    return(
      <BrowserRouter>
        <div>
          <header>
            <Navbar />
          </header>
          <main>
            <Switch>
              <Route path="/clubsoda" component={ClubSoda}/>
              <Route path="/dove" component={Dove}/>
              <Route path="/" component={Home}/>
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
