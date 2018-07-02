import React from 'react';
import ReactDOM from 'react-dom';

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
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          { this.state.currentPage === 'Home' && <Home />}
          { this.state.currentPage === 'ClubSoda' && <ClubSoda />}
          { this.state.currentPage === 'Dove' && <Dove />}
        </main>
        <Footer />
      </div>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
