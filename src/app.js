import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/Footer';
import Navbar from  './components/Navbar';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <div>
        <main>
          <Navbar />
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
