import React from 'react';

const Dove = () => {
  return(
    <div className="dove">
      <section className="doveOne">
        <div className="left">
          <h2>Dove Active:</h2>
          <h2>Design a health tracker app</h2>
          <div className="firstPara">
            <h3>Problem</h3>
            <p>To create a health tracker app aimed at encouraging self-esteem and body positivity. We needed to explore and define what health related issues Dove customers would like to track.</p>
          </div>
          <div className="secondPara">
            <h3>Role</h3>
            <p>UX/UI Designer. I helped conduct user research, affinity and empathy mapping, UI design and usability testing. </p>
          </div>
          <hr/>
          <p>Group project with Henry Brown, Miryam Benito-Lopez and Daniel Kwok. 2 weeks - March 2018.
          </p>
          <h2>Opportunity</h2>
          <p>"Beauty is not defined by shape, size or colour." Dove is a global skin care brand that launched a 'campaign for real beauty' in 2004. The idea was to redefine the definition of beauty by using real models in all of their advertising campaigns.
          </p>
          <h2>Healh tracker apps: the current landscape</h2>
          <p>Does counting calories and setting targets help to improve a user's self-esteem and body positivity?</p>
          <p>We discovered that existing apps were more focussed on encouraging users to track calorie intake and setting targets. We felt that there could be other interesting ways to track health to encourage body positivity, therefore we conducted some user research to gain some insight into current behaviours with health tracking apps.</p>
        </div>
        <div className="right">
          <div className="rectangle"><img src=""/></div>
          <img src="assets/images/dove-introduction.png" className=""/>
          <img src="assets/images/group-11.png"/>
        </div>
      </section>
      <section className="heroOne"></section>
    </div>
  );
};

export default Dove;
