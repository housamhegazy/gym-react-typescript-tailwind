import React from 'react'

type Props = {
    children:string
}

function Htext({children}: Props) {
  return (
    <h1 className="text-green-900 font-bold text-3xl">
        {children}
    </h1>
  )
}

export default Htext