import React from 'react';
import Tilt from 'react-tilt';
import spaceway from './spaceWay_top.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '10px', width: '100%', height:'100%'}} alt='logo' src={spaceway}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;