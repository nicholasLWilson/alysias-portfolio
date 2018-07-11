import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div className="home-container">
      <h1>You've come to the right place!<br /> I'm Alysia, a UX/UI Designer.</h1>
      <Link to="/dove">
        <div className="dove">
          <h2>Dove Active</h2>
          <h3>UX/UI Design</h3>
          <img src="/assets/images/DoveActive.png"></img>
        </div>
      </Link>
      <div className="right">
        <Link to="/clubsoda">
          <div className="club-soda">
            <h2>Club Soda</h2>
            <h3>UX/UI Design</h3>
            <img src="/assets/images/artboard.png" />
          </div>
        </Link>
        <Link to="#">
          <div className="taste-buds">
            <h2>Taste Buds</h2>
            <h3>UX/UI Design</h3>
          </div>
        </Link>
        <Link to="#">
          <div className="take-note">
            <h2>Take Note</h2>
            <h3>Coming soon!</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
