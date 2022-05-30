import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
  const {serviceId}= useParams()
  return (
    <div className='text-center'>
    <h1>  This is Booking page id {serviceId}</h1>
    </div>
  );
};

export default Booking;