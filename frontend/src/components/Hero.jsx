import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Hero left side */}
        <div className='w-full sm:1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <img src={assets.seraphic} className='w-96' alt="" />
            </div>
        </div>
        {/* Hero right side */}
        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
    )
}

export default Hero
