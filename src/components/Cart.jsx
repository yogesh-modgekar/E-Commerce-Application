import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Redux/Cartslice';
import { Link } from 'react-router-dom';

function Cart() {
  
  const cartitems = useSelector((state)=>state.cart);
  const dispatch = useDispatch();

  function handleRemove(id){
    dispatch(remove(id))
  }

  // Updating UI of cart component using useSelector from Redux
  return (
    <>
      <h1 className='cartHeading'>Your cart :</h1>
      
     <div className='container'>
        {
          cartitems.length > 0 ?
            cartitems.map((item)=>(
                <div className="card" key={item.id}>
                    <Link className='link' to={`/product/${item.id}`}>
                    <img src={item.thumbnail} alt="" />
                    <h4>{item.title}</h4>
                    <h5>${item.price}</h5>
                    </Link>
                    <h6> Qty: 1</h6>
                    {/* Event handler for REMOVE functionality */}
                    <button className='remove-btn' onClick={()=>handleRemove(item.id)}>Remove</button>
                </div>
            )) :
            <p className='emptycart'>Cart is Empty..!<span> <Link to='/'>continue shopping..!</Link></span></p>          
        }
       </div>

       <div className='total'>      
        <span>Total Amount : ${cartitems.map(items=>items.price ).reduce((total,value) => total + value,0)} </span>

        <Link to='/checkout' className='checkout'><button>Checkout</button></Link>
       </div>
       
    </>
  )
}

export default Cart 