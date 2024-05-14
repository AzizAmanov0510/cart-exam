import React from 'react'

const Product = ({ item, onClick,}) => {
  const { title, description, thumbnail } = item;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={thumbnail} alt="" />
      <button onClick={() => onClick(item)}>Cart ga o't</button>
    </div>
  )
}

export default Product
