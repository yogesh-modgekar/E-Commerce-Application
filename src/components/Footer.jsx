
import React from 'react'

function Footer() {
  return (
    <>
    <section className='footer'>
            <div className='inner-footer'>
                   <h3>Company Name</h3>
                   <li>$HOPYGLOBE-Commerce</li>
                   <li>India private Ltd.</li>
                   <li>Shivaji Maharaj Park,</li>
                   <li>Mumbai-400004,INDIA.</li>
            </div>
            <div className='inner-footer'>
                <h3>Services</h3>
                <li>Beauty</li>
                <li>Furniture</li>
                <li>Fragrances</li>
                <li>Handmade-Goods</li>
                <li>Gloceries</li>
            </div>
            <div className='inner-footer'>
                <h3>Contact Us</h3>
                <li><i className='bx bxl-whatsapp' ></i> +918458699001</li>
                <li><i className='bx bxl-gmail'></i> shopyglobe@gmail.com</li>
                <li><i className='bx bxl-instagram' ></i> shopyglobe</li>
                <li> <i className='bx bxl-facebook-circle' ></i> shopyglobe</li>
            </div>
    </section>
    <div className='copyright'>@2024 Copyright : $hopyGlobe.com</div>
    </>
  )
}

export default Footer