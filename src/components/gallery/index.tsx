import React from 'react'
import IMAGE2 from '../../assets/IMAGE2.jpg'
import IMAGE3 from '../../assets/IMAGE3.jpg'
import IMAGE4 from '../../assets/IMAGE4.jpg'
import IMAGE5 from '../../assets/IMAGE5.jpg'
import IMAGE6 from '../../assets/IMAGE6.jpg'
import IMAGE7 from '../../assets/IMAGE7.jpg'
import Htext from '../../shared/Htext'
type Props = {}
const imageList = [IMAGE2, IMAGE3, IMAGE4, IMAGE5, IMAGE6, IMAGE7]
const Gallery = (props: Props) => {
    return (
        <div id='gallery' className='my-10 bg-slate-400 py-10'>
            <h2 className='text-center text-[32px] text-green-900 pb-10'>
                Gallery
            </h2>
            <div className='w-full mx-auto container overflow-x-auto overflow-y-hidden '>
            <ul className='flex w-[2000px] gap-8'>
                {imageList.map((item) => {
                    return (
                        <li>
                            <img src={item} alt={`${item}`} className="w-[400px]" />
                        </li>
                    )
                })}
            </ul>
        </div>
        </div>
    )
}

export default Gallery