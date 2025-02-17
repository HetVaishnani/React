import React from 'react'
import Navbarcode from '../Component/Navbarcode'
import MovieForm from '../Component/MovieForm'
import Footer from '../Component/Footer'

function Movie() {
  return (
    <div>
      <Navbarcode></Navbarcode>
      <MovieForm></MovieForm>
      <Footer></Footer>
    </div>
  )
}

export default Movie