import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/Footer';
import Navbar from  './components/Navbar';
import ClubSoda from './components/ClubSoda';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <ClubSoda />
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
