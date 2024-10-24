import React, { useEffect, useState } from 'react'

function useCustomHook(url) {

    const [data, setData] = useState([])

    // Fetching API data using async await and useEffect

    useEffect(()=>{
        fetchApi()
    },[])
    
    async function fetchApi() {
        try{
              const response = await fetch(url);
              const data = await response.json();
              console.log(data.products)
              setData(data.products)
        }
        catch(err){
            console.log(err)
        }
    }
  return {data}
}

export default useCustomHook