
import React from 'react'
import { add } from '../Redux/Cartslice';
import { useDispatch } from 'react-redux';
import useCustomHook from './useCustomHook';
import { Link } from 'react-router-dom';

function ProductList() {

  const { data } = useCustomHook('https://dummyjson.com/products')

  // Dispatching action using useDispatch() hook from Redux

  const dispatch = useDispatch();

  function handleAdd(product) {
    dispatch(add(product))
  }
  
  // Rendering product list from custom hook
  return (
    <>
      <div className='container'>
        {
          data.map((product) => ( 
              <div className="card" key={product.id}>
                <p>{product.discountPercentage}%</p>
                <Link className='link' to={`/product/${product.id}`}>
                <img src={product.thumbnail} alt="" />
                <h3>{product.title}</h3>
                <h4>({product.category})</h4>
                <h5>${product.price}</h5>
              </Link>
                {/* Event handler for add to cart functionality */}
                <button className='add-btn' onClick={() => handleAdd(product)}>Add to cart</button>
              </div>

          ))
        }
      </div>
    </>
  )
}

export default ProductList