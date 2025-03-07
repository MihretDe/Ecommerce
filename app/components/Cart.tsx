'use client'
import React from 'react'

interface items{
    product : string
    price: number
    quantity:number
    subtotal:number 
}
const Cart: React.FC<{ item: items }> = ({ item }) => {
  return (
    <div className=''>
      <div className="grid grid-cols-4 border border-solid py-5 mb-3 shadow-md px-7">
        <p>{item.product}</p>
        <p>{item.price}</p>
        <input 
          type='number' 
          style={{ width: '50px' }} 
          defaultValue={item.quantity} 
          onChange={(e) => {
            const newQuantity = parseInt(e.target.value, 10);
            item.quantity = newQuantity;
            item.subtotal = item.price * newQuantity;
          }} 
          autoFocus 
        />
        <p>{item.price * item.quantity}</p>
      </div>
    </div>
  )
}

export default Cart
