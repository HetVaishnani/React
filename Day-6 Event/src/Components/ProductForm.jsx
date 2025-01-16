import React from 'react'

function ProductForm({handleChange,handleSubmit}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Product Name' name='Product_Name' onChange={handleChange}/><br/><br />
        <input type="text" placeholder='Product Image' name='Product_Image' onChange={handleChange}/><br/><br />
          <input type="text" placeholder='Product Price' name='Product_Price' onChange={handleChange}/><br/><br />
      <input type="submit" />
      </form>
    </div>
  )
}

export default ProductForm
