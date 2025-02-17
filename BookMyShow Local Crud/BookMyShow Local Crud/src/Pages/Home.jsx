import React from 'react'
import Navbarcode from '../Component/Navbarcode'
import Slider from '../Component/Slider'
import MovieShow from '../Component/MovieShow'
import Footer from '../Component/Footer'

function Home() {
  return (
    <div>
        <Navbarcode></Navbarcode>
        <Slider></Slider>
        <MovieShow></MovieShow>
        <Footer></Footer>
    </div>
  )
}

export default Home