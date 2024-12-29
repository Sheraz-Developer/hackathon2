import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Seraphic Scent is a leading event planning company that specializes in creating unforgettable experiences. With a focus on creativity, detail, and flawless execution, we tailor every event to match your unique vision, ensuring moments that leave a lasting impression.</p>
        <p>Seraphic Scent is an event planning company that transforms ordinary moments into unforgettable experiences. We blend innovation, style, and precision to create events tailored to your vision, ensuring every detail is executed flawlessly.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>At Seraphic Scent, our mission is to create unforgettable events that inspire and delight. We are dedicated to bringing each client's vision to life with creativity, precision, and impeccable attention to detail. By combining personalized service with innovative design, we strive to craft unique, seamless experiences that leave a lasting impression. Our goal is to exceed expectations and deliver events that are as memorable as they are extraordinary.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Facilities:</b>
          <p className='text-gray-600'>Seraphic Scent offers exceptional facilities, including stunning venues, advanced technology, and custom décor and catering services, ensuring every event is flawless. Our expert team handles every detail, making your vision a reality, whether for intimate gatherings or large celebrations.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>At Seraphic Scent, we prioritize convenience by managing all event details, from venue selection to catering, ensuring a stress-free experience. Our flexible packages and personalized services make bringing your vision to life effortless.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At Seraphic Scent, exceptional customer service is our priority. We provide personalized, attentive support, ensuring every detail aligns with your vision. Our team offers expert guidance, clear communication and ensure your complete satisfaction.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
