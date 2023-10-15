import React from 'react';
import './cssbody2.css';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();


const Card = () => {
  return (
    <div className='card'>
      <img src="watch.png" id="watch" />
      <span id='textinp'>Weekender Travel Duffel</span>
       <div id='spantext2'>Amazon - 1 Day Ago</div>
      <div id='price'> 
          <span>$24</span>
         <span id='h61'>$24</span>
          <span id='h62'>+ free shipping</span>      
      </div>
      <button className='dealbtn'><p>VIEW DEAL</p></button>
    </div>
  );
};
  

const items = [
    <Card/>,<Card/>,<Card/>

];

const Body2 = () => {
  return (
      <AliceCarousel mouseTracking items={items} />
  )
}

export default Body2
