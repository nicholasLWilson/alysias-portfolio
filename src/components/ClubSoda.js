import React from 'react';

const ClubSoda = () => {
  return(
    <div>
      <section className="clubOne">
        <div className="left">
          <h2>Club Soda:</h2>
          <h2>Mobile Responsive Design</h2>
          <div className="firstPara">
            <h3>Problem</h3>
            <p>A redesign of the existing website to improve the website with a mobile-first approach, ensuring that the website would be responsive and easy to use for customers using a mobile device.</p>
          </div>
          <div className="secondPara">
            <h3>Role</h3>
            <p>Facilitator & UX/UI Designer. I helped deliver competitive research, user Interviews, affinity mapping, personas, branding, UI Design and a client presentation.</p>
          </div>
          <hr/>
          <p>Group project with Daniel Kwok, Andrea Fiorini and Sam Awad 2 weeks - April 2018.</p>
          <h2>Opportunity</h2>
          <p>Club Soda is a social movement aimed at helping &#39mindful drinkers&#39 find pubs, bar and restaurants to cater for people who are trying to cut down on their drinking behaviours.</p>
          <h2>Challenges</h2>
          <p>I was responsible for creating a set of task scenarios that could test the current website and identify the existing issues.</p>
        </div>
        <div className="right">
          <div className="rectangle"><img src="/assets/images/club-soda-banner-image.png"/></div>

        </div>
        <div className="bottom">
          <img src="/assets/images/challenges.png" />
        </div>
      </section>
      <section className="heroOne"></section>
      <section className="clubTwo">
        <div className="left">
          <h2>Research findings</h2>
          <p>From our user interviews, we conducted an affinity map to understand the core motivations and emotions behind our ‘mindful drinkers.’ We found that mindful drinkers have various reasons and motivations behind changing their drinking behaviours.</p>
          <p>Social pressure, isolation, and the fear of judgement within a social environment were blah blah blah blah blah. </p>
          <h2 className="personas">Personas</h2>
          <p>From our research, we were then able to create 2 specific user groups and the reasons why they wanted to change their drinking behaviours:</p>
          <p>They don&#39t like who they become when they drink. 
          They are concerned about their health.</p>
        </div>
        <div className="right"><img src="/assets/images/clubsoda-quotes.png"/></div>
        <div className="bottom">
          <div className="sandra">
            <div className="sandraimg">
              <div><img src="/assets/images/personas.png"></img></div>
              <p><strong>Sandra</strong></p>
            </div>
            <div className="statement">
              <p><strong>“Mindful drinking to me is looking after my body, health and wellness.”</strong></p>
              <p>Diagnosed with IBS.</p>
              <p>Wants to look after her health by eating well and drinking no alcohol.</p>
              <p>Her main goal is to maintain her social life without feeling excluded now she doesn&#39t drink.</p>
            </div>
          </div>
          <div className="kristin">
            <div className="kristinimg">
              <div><img src="/assets/images/personas-1.png"></img></div>
              <p><strong>Kristin</strong></p>
            </div>
            <div className="statement">
              <p><strong>“The drinking isn’t the problem, it’s actually being drunk.”</strong></p>
              <p>To feel social without drinking in excess.</p>
              <p>Wants to become more responsible with her drinking without affecting her social life.</p>
              <p>Her main goal is to find more low or non-alcoholic drinks which will help her be more responsible with her drinking.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="heroTwo"><img></img></section>
      <section className="clubTwo">
        <h2>Design Studio</h2>
        <img></img>
        <div>
          <div><p>1</p><p>We wanted to explore the idea that Club Soda could use a tag system to categorise each venue by what they offer.</p></div>
          <div><p>2</p><p>The idea that Club Soda could promote non-alcoholic drink brands as an alternative to existing alcoholic drinks. </p></div>
        </div>
      </section>
    </div>
  );
};

export default ClubSoda;
