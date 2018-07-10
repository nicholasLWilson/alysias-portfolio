import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
  return(
    <div className="nav">
      <Link to="/"><h1>Alysia Pickup</h1></Link>
      <nav>
        <ul>
          <li><Link to="/clubsoda">ClubSoda</Link></li>
          <li><Link to="/dove">Dove</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
