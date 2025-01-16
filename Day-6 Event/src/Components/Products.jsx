import React from 'react'
import { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

function Products() {
    const [swi, setSwi] = useState(true)
    const [state,setState]=useState({
        Product_Name:'',
        Product_Image:'',
        Product_Price : ''
    });
    const [arr, setArr] = useState([])

    const handleChange=(e)=>{
        const {name,value}=e.target
        setState({...state,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setArr([...arr, state])
        
    }
    console.log(arr);


  return (
    <div>
      <button onClick={()=>setSwi(true)}>Form</button>
      <button onClick={()=>setSwi(false)}>Product</button>
      {swi ? <ProductForm handleChange={handleChange} handleSubmit={handleSubmit}/>:<ProductList arr={arr}/>}
    </div>
  )
}

export default Products
