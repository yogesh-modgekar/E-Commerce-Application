import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useCustomHook from './useCustomHook';
import { add } from '../Redux/Cartslice';
import { useDispatch} from 'react-redux';

function Header() {

  const { data } = useCustomHook('https://dummyjson.com/products')

 // Updating UI using useSelector() hook from Redux
  const items = useSelector((state) => state.cart)

  //Dispatching actions using useDispatch() hook from Redux
  const dispatch = useDispatch();

  function handleAdd(product){
      dispatch(add(product))
  }

  const [text, setText] = useState("")
  const [finalProduct, setFinalProduct] = useState("")
 
// Search Functionality
  function handleChange() {
    const filteredProduct = data.filter((data) => data.title.toLowerCase().includes(text.toLowerCase()))
    console.log('FilteredBook :', filteredProduct)
    setFinalProduct(filteredProduct)
  }

  return (
    <>
      <nav className='nav-bar'>
        <div className="logo">$hoppyGlobe</div>
        <div className="search">
          <input type="text" className='search-input' placeholder='Enter Your Orders' onChange={(e) => setText(e.target.value)} />
          <button className='search-btn' onClick={handleChange} ><i className='bx bx-search-alt-2'></i></button>
        </div>
        <div className="cart">
          <Link to='./cart'><i className='bx bx-cart'></i>
            <span>{items.length}</span>
          </Link>
          <Link to='/'><i className='bx bx-home-heart'></i></Link>
        </div>
      </nav>
     
     {/* Rendering Search product */}
      <div className='filter-product'>
        <div className='container'>
          {
            finalProduct && (
              finalProduct.map((product) => (

              <div className="card" key={product.id}>
                <span>{product.discountPercentage}%</span>
                <img src={product.images[0]} alt="" />
                <h3>{product.title}</h3>
                <h5>${product.price}</h5>
                <button onClick={() => handleAdd(product)}>Add to cart</button>
              </div>
            ))
          )
          }
        </div>
      </div>

    </>
  )
}

export default Header