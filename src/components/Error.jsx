
import React from 'react'
import { Link } from 'react-router-dom'
import { useRouteError } from 'react-router-dom'

function Error() {

  const err = useRouteError()
 
  return (
    <>
         <div className='errorPage'>
         <h1> Page not found - {err.status}</h1>
         <p><Link to = '/'>Please visit to homepage..!</Link></p>
         </div>
    </>
  )
}

export default Error