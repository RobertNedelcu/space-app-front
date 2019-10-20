import React from 'react';
import businessImg from './business.jpg';
import consumerImg from './consumer.jpg';
import './BusinessCategory.css';

const BusinessCategory = ({ onButtonSubmit }) => {
  return (
    <div>
      <div className='center'>
        <div className='w10 pa4 br3 shadow-5 fl w-50'>
          <p className='washed-blue f2'>Business</p>
          <ul>
              <li className='left f3 washed-blue pa3'>Methane extraction on Neptune’s moons using our logistics service with your equipment.</li>
               <li className='left f3 washed-blue pa3'>Another possibility for bussines represents neptunian ice water. Neptune contains a high amount  of "ices" such as water, ammonia and methane. However, ice can be warmed up and transformed into drinking water..Everyone is invited to invest and benefit from these incredible discoveries and enjoy  this great experience together.</li>
            </ul>
        </div>
         <div className='w10 pa4 br3 shadow-5 fl w-50'>
          <p className='washed-blue f2'>Exploration</p>
          <ul>
            <li className='left f3 washed-blue pa3'>Get closer to the Kuiper Belt for cosmic research.</li>
            <li className='left f3 washed-blue pa3'>Find new opportunities and discover: use our equipment or bring your own.</li>
            <li className='left f3 washed-blue pa3'>Nobody travelled past Kuiper Belt needless to say past Pluto, scientists believe that there are planets orbiting other stars and colonising solar system’s borders is the beginning of a new interstellar age.</li>
          </ul>
        </div>
      </div>
      <div className='center'>
        <div className='w-50'>
           <div className='center ma'>
            <div className='absolute mt2'>
              <img id='inputimage' alt='' src={businessImg} width='500px' heigh='auto'/>
            </div>
          </div>
        </div>
         <div className='w-50'>
         <div className='center ma'>
            <div className='absolute mt2'>
              <img id='inputimage' alt='' src={consumerImg} width='500px' heigh='auto'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessCategory;