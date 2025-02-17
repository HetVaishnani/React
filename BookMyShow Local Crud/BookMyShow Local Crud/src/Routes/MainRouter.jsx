import React from 'react'
import {  Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Movie from '../Pages/Movie'
import PageNotFound from '../Pages/PageNotFound'
import AllMovie from '../Pages/AllMovie'

function MainRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Movie' element={<Movie></Movie>}></Route>
            <Route path='/Movie/:id' element={<Movie></Movie>}></Route>
            <Route path='/All Movie' element={<AllMovie></AllMovie>}></Route>
            <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    </div>
  )
}

export default MainRouter