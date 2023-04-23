import React from 'react'

type Props = {}

const ContactUs = (props: Props) => {
  return (
    <div className='container mx-auto md:flex gap-8 justify-between w-full'>
        <div className='basis-3/5'>
            <form className='flex flex-col w-full gap-4 '>
                <input type='text'placeholder='name' className='bg-blue-300 rounded-full px-3 py-2 w-full placeholder:text-gray-500'/>
                <input type="email" name=""placeholder='email' className='bg-blue-300 rounded-full px-3 py-2 w-full placeholder:text-gray-500' />
                <textarea rows={5} cols={10} placeholder='message' className='bg-blue-300 rounded px-3 py-2 w-full placeholder:text-gray-500'/>
            </form>
        </div>
        <div>
            <img src="" alt="" />
        </div>
    </div>
  )
}
export default ContactUs