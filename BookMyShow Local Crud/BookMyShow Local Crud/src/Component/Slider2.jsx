import React, { useEffect, useState } from 'react'
import s1 from "../assets/s1.jpg"
import s4 from "../assets/s4.avif"
import s5 from "../assets/s5.avif"

function Slider2() {

  const images = [s1,s4,s5];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000)

        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

  return (
    <div className='h-[350px] w-[100%] bg-[#EBEBEB] flex justify-evenly items-center'>
                <button onClick={prevImage} className=" bg-gray-400  text-white p-2 rounded cursor-pointer">❮</button>
                <img src={images[currentIndex]} alt="Sliding Image" className="h-[95%] w-[95%] rounded-[10px] transition-all duration-500" />
                <button onClick={nextImage} className="  bg-gray-400  text-white p-2 rounded cursor-pointer">❯</button>
    </div>
  )
}

export default Slider2