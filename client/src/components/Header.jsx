import React from 'react';
import './headercss.css'


const Header = () => {
  return (
    <header>
      <nav className='nav'>
        <div className='div1'>
          <span className='logo'>
            <span id='p1'>FORM</span>
            <span id='p2'>DEALS</span>
          </span>
          <div className='burgerdiv'><img id='burger' src="burger.png"/></div>
          
          <span className='longtext'>
            <span id='t1'>Unlock </span>
            <span id='t2'>Great Savings</span>
            <span id='t3'>with New Daily Deals</span>
          </span>
          <span id='headset'><img src="headset.png" /></span>
          <span id='jucer'><img src="jucer.png" /></span>

          <span id='bag'><img src="bag.png" /></span>
          <span id='iphone'><img src="iphone.png" /></span>
          
        </div>
        <div className='toogles'>
          <div>TRENDING</div>
          <div>DEAL OF THE DAY</div>
          <div>WEEKLY DEALS</div>
          <div>MONTHLY DEALS</div>
          <div>PREMIUM DEALS</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
