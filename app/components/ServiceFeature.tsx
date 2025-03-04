import React from 'react'
import ServiceComp from './ServiceComp'
const ServiceFeature = () => {
  return (
    <div className='flex justify-between mx-36'>
      <ServiceComp title='FREE AND FAST DELIVERY' detail='Free delivery for all orders over $140'/>
      <ServiceComp title='24/7 CUSTOMER SERVICE' detail='Friendly 24/7 customer support'/>
      <ServiceComp title='MONEY BACK GUARANTEE' detail='We reurn money within 30 days'/>
    </div>
  )
}

export default ServiceFeature
