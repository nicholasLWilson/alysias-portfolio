import React from 'react';

const Footer = () => {
  return(
    <footer>
      <div className="left">
        <p>Hi! I’m Alysia, a UX designer from Camberwell, London. You’ve looked at my work, now you can find out more <a href="">here!</a></p>
        <p>Made by <a href="http://thisisnic.com">thisisnic.com</a></p>
      </div>
      <div className="right">
        <p>Get in contact!</p>
        <p className="email">email: <a href="mailto:alysiapickup@gmail.com">alysiapickup@gmail.com</a></p>
        <ul>
          <li><a href="https://www.instagram.com/alysiapickup/"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://www.linkedin.com/in/alysiapickup/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://medium.com/@alysiapickup"><img src="/assets/images/medium.png"/></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
