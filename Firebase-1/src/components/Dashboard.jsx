import React, { useEffect, useState } from 'react'
import {auth, db} from "../../firebaseConfig";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  // console.log(auth.currentUser);

  const [uid,setUid] = useState(null);
  const [record,setRecord] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    let subscriber = onAuthStateChanged(auth,(user)=>{
      if(user)
      {
        setUid(user.uid);
      }
    })
  },[]);

  console.log(uid);

  useEffect(()=>{
    if(uid)
    {
      fetchUser();
    }
  },[uid]);

  const fetchUser = async () => {
    await getDoc(doc(db,"Users",uid)).then((res)=>{
      let data = res.data();
      setRecord(data);
    })
  }

  const handleLogout = async () => {
    await signOut(auth);
    setUid(null);
    setRecord("");
    navigate("/signin");
  }

  return (
    <>
      <section className='bg-black flex justify-between items-center px-10 py-2'>
        <h1 className='text-white font-semibold text-2xl'>Logo</h1>
        <ul className='flex items-center gap-10'>
          <li className='text-white text-lg'>Welcome, {record ? record.name : "Guest"}</li>
          <li className='text-white cursor-pointer text-lg' onClick={handleLogout}>Logout</li>
        </ul>
      </section>
      <h1 className='text-center text-3xl font-semibold mt-10'>Dashboard</h1>
    </>
  )
}

export default Dashboard
