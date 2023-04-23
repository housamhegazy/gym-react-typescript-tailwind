import React from 'react'

type Props = {
    children:string
}

function Header({children}: Props) {
  return (
    <h1 className='text-center text-blue-900 font-bold text-3xl myt-5 mb-[50px]'>
        {children}
    </h1>
  )
}

export default Header