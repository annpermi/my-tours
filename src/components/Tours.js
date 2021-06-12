import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return <section className='title'>
    <h1>Our tours</h1>
    <div className='underline'>
      {tours.map(tour=>{
        return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
      })}
    </div>
  </section>;
};

export default Tours;