
import React from 'react'
import { add } from '../Redux/Cartslice';
import { useDispatch } from 'react-redux';
import useCustomHook from './useCustomHook';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Product() {

  // Dynamic routing using useParams() Hook
  const params = useParams();

  const { data } = useCustomHook('https://dummyjson.com/products')

  const productDetails = data.filter(product => product.id == params.id)

  const dispatch = useDispatch();

  function handleAdd(productDetails) {
    dispatch(add(productDetails))
  }

  // Rendering Product Details from Custom Hook
  return (
    <>
      <div className='outer-div'>
        {
          productDetails.map((productDetails) => (
            <div className='product-detail' key={productDetails.id}>
              <span>{productDetails.discountPercentage}%</span>
              <Link to='/'><span className='cancel'><i class='bx bxs-message-square-x'></i></span></Link> <br />
              <img src={productDetails.thumbnail} alt="" />
              <h2>{productDetails.title}</h2>
              <div className='category-brand'>
                <p>category :{productDetails.category}</p>
                <p>brand : {productDetails.brand}</p>
                <p>{productDetails.rating}/5</p>  
              </div>
              <p>{productDetails.description}</p>
              <h5>{productDetails.warrantyInformation}</h5>
              <h4>{productDetails.returnPolicy}</h4>
              <h5>${productDetails.price}</h5>
              <button onClick={() => handleAdd(productDetails)}>Add to cart</button>
            </div>
          ))
        }
      </div>
    </>

  )

}

export default Product