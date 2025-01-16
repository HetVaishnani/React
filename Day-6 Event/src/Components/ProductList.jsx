import React from 'react'

function ProductList({arr}) {
  return (
    <div>
      <div>ProductList</div>
      {
      arr.map((el)=>{
        return <div>
          
          <h1>{el.Product_Name}</h1>
          <img src={el.Product_Image} alt={el.Product_Image} style={{ width: "300px" }} /> 
          <p>{el.Product_Price}</p> 
          
        </div>
      })
      }
    </div>
  )
}

export default ProductList
