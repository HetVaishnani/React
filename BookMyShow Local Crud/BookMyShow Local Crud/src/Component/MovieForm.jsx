import React, { useEffect, useState } from 'react'
import { data, useNavigate, useParams } from 'react-router'

function MovieForm() {

    const {id} =useParams()
    console.log(id);
    

    const [state,setState]=useState({
        img:"",
        title:"",
        des:"",
        id: Date.now()
    })
    const [arr,setarr]=useState(JSON.parse(localStorage.getItem("data")) || [])

    const navigation=useNavigate();

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(arr))
    },[arr])

    const handleChange=(e)=>{
        const {name,value}=e.target
        setState({...state,[name]:value})
    }

    // console.log(state);

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(!state.img || !state.title || !state.des)
        {
            alert("Please enter all fields")
            return;
        }


       let data2;
        if(id)
        {   
            data2=arr.map((el)=>{
                if(el.id==id)
                {
                    return state;
                }
                else{
                    return el;
                }
            })
            setarr(data2)
        }
        else{
            setarr([...arr,state])
        }

        setState({
            img:"",
            title:"",
            des:"",
            id: Date.now()
        })
        navigation("/")
    }
    // console.log(arr);
    

    useEffect(()=>{
        if(id)
        {
            const data1=arr.find((el)=>{
                if(el.id==id)
                {
                    return el;
                }
            })
            // console.log(data1);
            setState(data1)
        }
    },[id,arr])




  return (
    <div className='h-[500px] w-[100%] flex justify-center items-center bg-[#EBEBEB] '>
        <div className='h-[80%] w-[35%] bg-[white] drop-shadow-xl'>
            <h1 className='text-center text-[22px] mt-[8%]'>Movie Detail</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="img" value={state.img} placeholder='Image URL' className='h-[40px] pl-[10px] w-[85%] ml-[7.5%] border  border-[#EBEBEB] mt-[5%]' onChange={handleChange} id="" />
                <input type="text" name="title" value={state.title} placeholder='Title' className='h-[40px] pl-[10px] w-[85%] ml-[7.5%] border border-[#EBEBEB]  mt-[20px]' onChange={handleChange} id="" />
                <input type="text" name="des" value={state.des} placeholder='Description' className='h-[40px] pl-[10px] w-[85%] ml-[7.5%] border  border-[#EBEBEB] mt-[20px]' onChange={handleChange} id="" />
                <input type="submit" name="" value={id?"Update":"Submit"} className='h-[45px] w-[85%] ml-[7.5%] hover:shadow-sm cursor-pointer rounded-[5px] bg-[#F84464] text-[white]  border mt-[25px] ' id="" />
            </form>
        </div>
    </div>
  )
}

export default MovieForm