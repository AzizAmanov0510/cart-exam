import React from 'react'

const Cart = ({cart, onClick, setCart}) => {

  return (
    <div>
      <h1>Cart:</h1>
      {
        cart.length > 0 ? (<ul>
          {cart.map(item => (
          <li key={`${item.id}-${Math.random() * 100}`}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <img src={item.thumbnail} alt="" />
          </li>
        ))}
        </ul>) : 'Cartlar yoq'
      }
    </div>
   
  )
}

export default Cart
