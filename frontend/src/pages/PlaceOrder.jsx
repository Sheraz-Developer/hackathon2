import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method,setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* -----------Left Side---------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div>
            <div className="col border-8 rounded-sm">
            <p className='font-bold ml-2 mb-2 mt-2'>Required Information</p>
              <ul className='mt-0 pl-5 ml-3 text-slate-900 marker:text-lg list-disc '>
                
                <li>First name</li>
                <li>Last name</li>
                <li>Phone number</li>
                <li>City</li>
                <li>State</li>
                <li>Street</li>
                <li className='mb-2'>Phone</li>
              </ul>
            </div>
          </div>
        
          <div className='w-full text-start   '>
            <div>
              <p className='font-semibold'>To buy tickets:</p>
              <p className='p-2'>Click on whatsapp</p>
            </div>
          </div>

          <div>
            <button>
              <a href="https://wa.me/923088602965?text=Order Required Information:First name:  , Last Name:  , Phone number:  , City:  , State:  , Street:"  target='_blank'><img src={assets.whatsapp} className='w-40 border-8 rounded-sm ' alt="" /></a>
            </button>
          </div>
      </div> 
      {/* ----------Right Side---------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        
        {/* -----------Payment Method Selection------------- */}
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
        </div>
          
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border-8 rounded-sm p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          
        </div>
      </div>
    
  )
}

export default PlaceOrder
