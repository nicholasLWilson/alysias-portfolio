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
          <p className="bold">Does counting calories and setting targets help to improve a user's self-esteem and body positivity?</p>
          <p>We discovered that existing apps were more focussed on encouraging users to track calorie intake and setting targets. We felt that there could be other interesting ways to track health to encourage body positivity, therefore we conducted some user research to gain some insight into current behaviours with health tracking apps.</p>
        </div>
        <div className="right">
          <div className="rectangle"><img src="/assets/images/DoveActive.png"/></div>
          <img src="assets/images/dove-introduction.png" className=""/>
          <img src="assets/images/group-11.png"/>
        </div>
      </section>
      <section className="heroOne"></section>
      <section className="doveTwo">
        <h2>Interview findings</h2>
        <div className="findings">
          <div>
            <img src="/assets/images/scales.png"/>
            <p>User’s believe that the connection between <strong>health and body positivity goes beyond physical appearance.</strong></p>
          </div>
          <div>
            <img src="/assets/images/clipboard.png"/>
            <p>People were <strong>negatively affected by counting calories</strong> in a way that made fitness targets unrealistic and intimidating. </p>
          </div>
          <div>
            <img src="/assets/images/group-4.png"/>
            <p>The amount of <strong>manual data entry</strong> was also a contributing factor to the <strong>drop off in use of current health tracking apps.</strong></p>
          </div>
        </div>
        <h2>Personas</h2>
        <div className="personas-wrapper"><p className="personas">To gain a more in-depth understanding of our user’s frustrations and pain points, we created a primary and secondary persona, validated by the key themes identified in our affinity mapping.</p></div>
        <div className="people">
          <div className="person">
            <div><img src="/assets/images/mia.png"/><h4>Mia</h4></div>
            <div>
              <p><strong>Mia is a busy school teacher who wants to lead by example by developing healthier habits.</strong></p>
              <p>She has recently had a baby and wants to lose her baby weight. However, she feels pressured by social media and cannot find the time to go to the gym.</p>
              <p>Needs: To become more active without affecting her busy schedule.</p></div>
          </div>
          <div className="person">
            <div><img src="/assets/images/edith.png"/><h4>Edith</h4></div>
            <div>
              <p><strong>Edith is a retired business owner who wants to use a health tracker app to maintain a healthy lifestyle.</strong></p>
              <p>She can’t do strenuous exercise as she has got a knee injury and feels that health tracker apps are more tailored to younger, more active people.</p>
              <p>Needs: To find a health tracker app that is tailored to her lifestyle and her current knee injury.</p></div>
          </div>
        </div>
      </section>
      <section className="heroTwo"></section>
      <section className="doveThree">
        <h2>Design studio</h2>
        <img src="/assets/images/group-7.png"/>
        <div className="studio">
          <div><p>1</p><p>How do we encourage healthier habits and activities and keep users engaged?
          Fun
          Encouraging nudge behaviours
          Rewards/benefits
          </p></div>
          <div><p>2</p><p>How do we show and track progress without upward or downward trends?
          Growth and cultivating progress
          Ongoing journey</p></div>
        </div>
        <h2>User testing</h2>
        <p>I was responsible for facilitating and running the usability testing, then analysing the results to implement into a low-fidelity wireframes. In testing, some users found it difficult to navigate through the choice of healthier habits and some did not realise that they could interact with certain areas of the interface.</p>
        <div className="user-testing">
          <div>
            <p>Did not recognise that they could swipe for alternatives.</p>
            <p>Did not reliably associate the slider with task duration.</p>
          </div>
          <img src="/assets/images/group-6.png"/>
          <p className="r-paragraph">Lack of clear metrics indicating progress.</p>
        </div>
        <h2>UI & Body Positivity</h2>
        <p>As our app was focussed around body positivity, it was important to use a more abstract figure throughout our visual design as opposed to a 'real life' figure. This would ensure that none of our users would aspire to a certain body type. I was responsible for delivering a compelling mood board and style guide that explored colour, iconography and typeface.
        </p>
        <img src="/assets/images/dove-moodboard.png" className="mood-board"/>
        <div className="iterations">
          <div>
            <h2>Design Iterations</h2>
            <p>After defining the mood board and style guide, we created the high-fidelity wireframes and mock ups.</p>
          </div>
          <img src="/assets/images/06-2-x.png"/>
          <img src="/assets/images/0-5-2-x.png"/>
        </div>
      </section>
      <section className="greyBox">
        <h2>Solution</h2>
        <p>Create an app that encourages healthier habits, tailored specifically to the user’s schedule of when they can perform more healthy behaviours.</p>
        <img src="/assets/images/group-5.png"/>
      </section>
      <section className="doveFour">
        <h2>Takeaways</h2>
        <div className="bottom">
          <div>
            <p>As a team, we worked incredibly well together. With interesting insights and discussions coming from all parties, we deconstructed our research to uncover the core beliefs behind our users.</p>
            <p>If we had more time, there would be additional opportunity to develop ways to visualise a user's progress over time, building a rewards system, suggesting healthier habits based on current location and integrating nutrition articles and recipes.</p>
          </div>
          <img src="/assets/images/group-10.png"/>
        </div>
      </section>
    </div>
  );
};

export default Dove;
