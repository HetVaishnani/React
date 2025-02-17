import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

function MovieShow() {


    const [state,setState]=useState(JSON.parse(localStorage.getItem("data")) ||[])
    

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(state))
    },[state])

    console.log(state);

    const handleDelete=(id)=>{
        // console.log(id);
       let a= state.filter((el)=>{
            return el.id != id;
        })
        
        setState(a)
    }
    

  return (
    <div className='h-auto w-[95%] ml-[2.5%]  grid grid-cols-5 gap-4' >
        {
            state? 
            state.map((el,i)=>{
                return <>
                <div className='h-[450px]  mt-[10%] mb-[20px]' key={i}>
                    <div className="img h-[80%] w-[100%]  rounded-[8px]">
                        <img src={el.img} alt="Image" className='h-[100%] w-[100%] rounded-[8px]' />
                    </div>
                    <div className="txt h-[20%] w-[100%]  ">
                        <h1 className='text-[20px] font-semibold capitalize'>{el.title}</h1>
                        <p className='text-[gray] capitalize'>{el.des}</p>
                        <Link to={`/Movie/${el.id}`}> <button className='h-[25px]  hover:shadow-sm cursor-pointer rounded-[5px] w-[70px] bg-[green] text-[white] text-[14px]  mt-[8px]' >Edit</button></Link>
                        <button className='h-[25px]  hover:shadow-sm cursor-pointer rounded-[5px] ml-[5%] w-[70px] bg-[#F84464] text-[white] text-[14px] mt-[8px] ' onClick={()=>handleDelete(el.id)}>Delete</button>
                       
                    </div>
                </div>
                </>
            })
            : "Loading...."
        }
    </div>
  )
}

export default MovieShow