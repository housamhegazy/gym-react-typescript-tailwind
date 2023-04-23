import React from 'react'
type Props = {
    title:string;
    desc:string;
    image:string
}
const customStyle = 'flex flex-col justify-center items-center absolute top-0 left-0 bg-slate-900 w-full h-full opacity-0 hover:opacity-75 transition duration-500'
function Class({image,title,desc}: Props) {
  return (
    <li className='relative'>
        <div className={customStyle}>
            <h1 className='font-bold text-white text-center px-2'>
                {title}
            </h1>
            <p className='text-white text-center px-3 mt-4'>{desc}</p>
        </div>
        <img src={image} alt={`${image}`} className="w-[400px]" />
    </li>
  )
}

export default Class