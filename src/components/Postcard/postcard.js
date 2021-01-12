import './postcard.scss';
import React from 'react';

function Postcard() {

  return (    
    <div id="about">
        <div>
        <div className="text break">
            <h3>A Little About Us</h3>
            <p>Join us for a day of building, learning, and having fun at South Carolina’s premiere hackathon! Come with old friends or meet new ones at the event and get ready for an action-packed 24-hours. No matter your major or level of experience... </p>
        </div>
        <div className="text" id="line">
            <div className="stamp">
            </div>
            <div id="wewantto">
            <div className="lines">
                <hr />
                <br />
                <hr />
                <br />
                <hr />
                <br />
                <hr />
            </div>
            <h3>We Want to </h3>
            <h3>"CU" hack it!</h3>
            </div>
        </div>
        </div>
    </div>
  );
}


export default Postcard;