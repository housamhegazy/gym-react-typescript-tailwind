import React from 'react'
import CONTACTUS from '../../assets/CONTACTUS.jpg'
import Htext from '../../shared/Htext'
import Header from '../../shared/Header'
type Props = {}

const ContactUs = (props: Props) => {
  return (
    <div className='my-5 container mx-auto '>
        <Header>Contact Us</Header>
        <div className='lg:flex gap-8 justify-between items-center w-full'>
            <div className='basis-2/5 mb-5'>
                <form 
                action="https://formsubmit.co/geohousam2@gmail.com" 
                method="POST"
                // onSubmit={(e)=>{
                //     e.preventDefault()
                // }}
                className='flex flex-col w-full gap-4 px-2'>
                    <input type='text'placeholder='name' className='bg-blue-300 rounded-full px-3 py-2 w-full placeholder:text-gray-500'/>
                    <input type="email" name=""placeholder='email' className='bg-blue-300 rounded-full px-3 py-2 w-full placeholder:text-gray-500' />
                    <textarea rows={5} cols={10} placeholder='message' className='bg-blue-300 rounded px-3 py-2 w-full placeholder:text-gray-500'/>
                    <button type='submit' className='bg-blue-900 text-white px-4 py-2 rounded mx-auto'>Send</button>
                </form>
            </div>
            <div className='basis-3/5'>
                <img src={CONTACTUS} alt="CONTACTUS" className='w-full mx-auto px-2' />
            </div>
        </div>
    </div>
  )
}
export default ContactUs