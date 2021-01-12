import './horizontal.scss';
import React from 'react';
import Postcard from '../Postcard/postcard';
import Schedule from '../Schedule/schedule';
import Partnercloud from '../PartnerCloud/partnercloud';
import Contact from '../Contact/contact';

function Horizontal() {

  return (    
    <div id="horizontalInset">
        <div id="cliffface">
          <div id="clifffaceContent">
            <Postcard />
            <div id="arrowContainer">
              <div id="arrow"></div>
              <p id="arrowLabel">Scroll!</p>
            </div>
            <Schedule />
          </div>
        </div>
        <div id="van"></div>
        <div id="skyContainer">
          <Partnercloud />
          <Contact />
        </div>
        <div id="roadimg">
      </div>
    </div>

  );
}

export default Horizontal;
