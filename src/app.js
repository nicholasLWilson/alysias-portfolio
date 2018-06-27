import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/Footer';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <div>
        <main>
          <h1>Header and Navbar</h1>
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
