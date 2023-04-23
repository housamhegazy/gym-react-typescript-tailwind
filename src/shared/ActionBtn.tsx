import React from 'react'

type Props = {
    children:string;
    target:string
}

function ActionButton({children,target}: Props) {
  return (
    <a href={target} className="rounded-full mt-4 inline-block text-white bg-blue-900 px-4 py-2 border-lime-30 hover:bg-blue-700">
        {children}
    </a>
  )
}

export default ActionButton