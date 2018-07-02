import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/Footer';
import Navbar from  './components/Navbar';
import ClubSoda from './components/ClubSoda';
import './scss/style.scss';

class App extends React.Component {
  state = {
    page: 'ClubSoda'
  }
  render() {
    return(
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          { this.state.page === 'ClubSoda' && <ClubSoda />}
          {/* { this.state.page === 'Dove' && } */}
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
