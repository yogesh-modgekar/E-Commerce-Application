import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Checkout() {


  const cartitems = useSelector((state) => state.cart);

  const data = {firstname:'', lastname:'', address:'', city:'', state:'', country:'', zip:'', number:'', email:'',
                card_holder:'', card_number:'', expiry_date:'', ccv:'' }
  
  const [inputData, setInputData] = useState(data);
  
  function handleData(e){
    setInputData({...inputData, [e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    // e.preventDefault();
    if(!inputData.firstname || !inputData.lastname || !inputData.address || !inputData.city || !inputData.state || !inputData.country || !inputData.zip || !inputData.number || !inputData.email || !inputData.card_holder || !inputData.card_number || !inputData.expiry_date || !inputData.ccv){
      alert('All Fields are Mandatory')
    }else{
      alert('Order is placed Successfully..!')
    }
  }

  // Creating form for shipping and payment data with validation
  return (
    <>
      <section className='checkout-page'>

        <form className='form' onSubmit={handleSubmit}>
          <h2>Shipping Details</h2>
          <div className="form-data">

            <label htmlFor="firstname">First Name:</label>
            <input type="text" name='firstname' id='firstname' placeholder='Enter Firstname' value={inputData.firstname} onChange={handleData}/>

            <label htmlFor="lastname">Last Name:</label>
            <input type="text" name='lastname' placeholder='Enter Lastname' value={inputData.lastname} onChange={handleData}/>

            <br /> <label htmlFor="address">Address:</label>
            <input type="text" name='address' id='address' placeholder='Enter Address' value={inputData.address} onChange={handleData}/>

            <br /><label htmlFor="city">City:</label>
            <input type="text" name='city' id='city' placeholder='Enter City' value={inputData.city} onChange={handleData}/>

            <label htmlFor="state"> State:</label>
            <input type="text" name='state' id='state' placeholder='Enter State' value={inputData.state} onChange={handleData}/>

            <br /><label htmlFor="country">Country:</label>
            <input type="text" name="country" id="country" placeholder='Enter Country' value={inputData.country} onChange={handleData}/>

            <label htmlFor="zip">Zip:</label>
            <input type="number" name='zip' id='zip' placeholder='Enter pincode' value={inputData.zip} onChange={handleData}/>   <br />

            <label htmlFor="number">Mob. No:</label>
            <input type="number" name='number' id='number' placeholder='Enter Mobile No.' value={inputData.number} onChange={handleData}/>

            <label htmlFor="email">Email:</label>
            <input type="email" name='email' id='email'  placeholder='Enter EmailID' value={inputData.email} onChange={handleData}/>
          </div>

          <h2>Payment Details</h2>

          <div className='payment-data'>
            <label htmlFor="card_holder">Name : </label>
            <input type="text" name='card_holder' id='card_holder' placeholder='card holder name' value={inputData.card_holder} onChange={handleData}/> <br />

            <label htmlFor="card_number">Card Number : </label>
            <input type="number" name='card_number' id='card_number' placeholder='card number' value={inputData.card_number} onChange={handleData}/> <br />

            <label htmlFor="expiry_date">Expiry date : </label>
            <input type="number" name="expiry_date" id="expiry_date" placeholder='00/00' value={inputData.expiry_date} onChange={handleData}/>

            <label htmlFor="ccv">CCV : </label>
            <input type="number" name='ccv' id='ccv' placeholder='xxx' value={inputData.ccv} onChange={handleData}/>
          </div>
          <button className='place-order'>Place Order</button>

          <Link to='/'>continue shopping..!</Link>
        </form>
        
        {/* Showing final cart data */}
        <div className='your-order'>
          <h2>Your Order</h2>
          {
            cartitems.length > 0 ?
            cartitems.map((item) => (
              <div className="inner-order-img" key={item.id}>
                <img src={item.thumbnail} alt="" />
                <div className='inner-order-div'>
                  <h4>{item.title}</h4>
                  <h5>${item.price}</h5>
                  <h6> Qty:1</h6>
                </div>
              </div>
            )) :
            <p> Cart is Empty..!</p> 
          }
          <span className='final-total'>Total Amount : ${cartitems.map(items => items.price ).reduce((total, value) => total + value, 0)} </span>
        </div>
      </section>
    </>
  )
}

export default Checkout