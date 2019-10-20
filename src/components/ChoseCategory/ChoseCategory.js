import React from 'react';
import './ChoseCategory.css';

const ChoseCategory = ({ onRouteChange }) => {
  return (
    <div>
      <div className='center'>
        <div className='title pa4 br3 shadow-5'>
          <p className='f3 washed-blue'>
           {'Welcome to Griffin Spaceway'}
          </p>
          <p className='f3 washed-blue'>
              {'Chose your plan'} 
          </p>
        </div>
      </div>
      <div className='center'>
        <div onClick={() => onRouteChange('consumerCategory')} className='halfTitle pa4 br3 shadow-5 w-25 grow'>
          <p className='f3 washed-blue'>
           {'Consumer path'}
          </p>
        </div>
         <div onClick={() => onRouteChange('businessCategory')} className='halfTitle pa4 br3 shadow-5 w-25 grow'>
          <p className='f3 washed-blue'>
           {'Bussiness path'}
          </p>
        </div>
      </div>
      
      
    </div>
  );
}

export default ChoseCategory;