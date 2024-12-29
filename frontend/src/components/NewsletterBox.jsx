import React from 'react'
import { assets } from '../assets/assets';

const NewsletterBox = () => {
    
    return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Follow now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            We offer you to Follow us on instagram and get up to 20% discount. So subscribe us this offer is limited.
        </p>
        <button className='items-center'><a href="https://www.instagram.com/seraphic.scent/" target='_blank'><img className='mt-4 w-20 items-center' src={assets.instagram} alt="" /></a></button>
    </div>
    )
}

export default NewsletterBox
