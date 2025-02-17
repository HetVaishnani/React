import React from 'react'
import l1 from "../assets/l1.png"
import { Link } from 'react-router'

function Navbarcode() {
  return (
   <>
    <div className='h-[60px] w-[100%]  bg-[white] flex justify-between items-center'>
      <div className="logo h-[100%] w-[50%]  ms-[3%] flex items-center relative ">
        <div className="logoImg h-[100%] w-[25%]  flex justify-center items-center">
          <Link to="/"><img src={l1} alt="" className='h-[55%] w-[85%]  ml-[7.5%]' /></Link>
        </div>
        <i className="fa-solid fa-magnifying-glass absolute left-[26.5%] top-[41%] text-[gray] text-[13px]"></i>
        <input type="search" className='w-[75%] rounded-[3px] ps-[35px] h-[35px] border' placeholder='Search for Movie,Events,Plays,Sports and Activities' name="" id="" />
      </div>
      <div className="btns h-[100%] w-[20%]  me-[3%] flex items-center">
        <select value="" className='cursor-pointer'>
        <option >Rajkot</option>
        <option >Ahmedabad</option>
        <option >Mumbai</option>
        <option >Delhi-NCR</option>
        <option >Hyderabad</option>
        <option >Chennai</option>
          <option >Pune</option>
        </select>
        <Link to="/Movie"><button className='h-[25px] ml-[15%] hover:shadow-sm cursor-pointer rounded-[5px] w-[70px] bg-[#F84464] text-[white] text-[14px]'>Movie</button></Link>
        <i class="fa-solid fa-bars text-[18px] ml-[15%] cursor-pointer"></i>
      </div>
    </div>
    <div className="nav h-[40px] w-[100%] bg-[#F5F5F5] flex justify-between items-center">
      <div className="n1  h-[100%] w-[38%] ms-[3%]  flex items-center ">
        <ul className='flex justify-evenly w-[100%] text-[14px] text-[#333333]'>
          <li><Link to={`/All Movie`}><a href="">Movies</a></Link></li>
          <li><a href="">Stream</a></li>
          <li><a href="">Events</a></li>
          <li><a href="">Plays</a></li>
          <li><a href="">Sports</a></li>
          <li><a href="">Activities</a></li>
        </ul>
      </div>
      <div className="n2  h-[100%] w-[30%] me-[3%] flex items-center ">
        <ul className='flex justify-evenly w-[100%] text-[14px] text-[#333333]'>
          <li><a href="">ListYourShow</a></li>
          <li><a href="">Corporates</a></li>
          <li><a href="">Offers</a></li>
          <li><a href="">Gift Cards</a></li>
        </ul>
      </div>
    </div>
   </>
  )
}

export default Navbarcode