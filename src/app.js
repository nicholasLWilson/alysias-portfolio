import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma';
import Footer from './components/Footer';

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
