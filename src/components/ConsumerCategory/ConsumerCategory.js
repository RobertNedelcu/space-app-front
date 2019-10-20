import React from 'react';
import tourismImg from './tourism.jpg';
import './ConsumerCategory.css';

const ConsumerCategory = ({ onButtonSubmit }) => {
  return (
    <div>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
        <p className='washed-blue f2'>Tourism</p>
      	 <ul>
            <li className='left f3 washed-blue pa3'>Space travel made easy using TNS.</li>
            <li className='left f3 washed-blue pa3'>Average price for booking a tour is 1.000.000$, this includes pre-flight training, equipment and stay. </li>
          	<li className='left f3 washed-blue pa3'>Main attractions include trips around Neptune’s endangered rings and trips to the Kuiper Belt.</li>
          	<li className='left f3 washed-blue pa3'>We also provide our tourists with unique and cool experiences, all while making full use of all Griffin TNS laboratories and space observation equipment.</li>
          	<li className='left f3 washed-blue pa3'>Register now to be the first announced when our ships leave for TNS!</li>
          </ul>
          {/*<div className='w-25'>
              <div className='center ma'>
              <img id='inputimage' alt='' src={tourismImg} width='500px' heigh='auto'/>
              </div>
          	 
          </div>*/}
        </div>
      </div>
      <div className='center'>  
        <div className='w-50'>
           <div className='center ma'>
            <div className='absolute mt2'>
              <img id='inputimage' alt='' src={tourismImg} width='500px' heigh='auto'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsumerCategory;
