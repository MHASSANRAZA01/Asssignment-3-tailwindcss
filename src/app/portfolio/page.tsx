import React from 'react'
import Image from 'next/image'
import Photo from "/public/Photo.png"


const page = () => {
  return (
    <div className="flex items-center justify-between mt-1">
    <div className="w-fit h-[200px] m-12 text-[60px] font-medium not-italic">
      Hey,
      <br />
      My Name is <span className="text-red-600">Hassan Raza</span>
      <br />I am Next JS Developer
    </div>
    <div className="flex my-2 mx-auto">
    <Image src={Photo}
    alt="Photo"
     width={400}
      height={500} />
    
    
    </div>
    </div>
  )
}

export default page