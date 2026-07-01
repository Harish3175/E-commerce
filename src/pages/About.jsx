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
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>We believe that what you wear should make you feel confident, comfortable, and effortlessly you. Founded in 2025 in Chennai, Forever was born out of a desire to create high-quality, everyday essentials without the luxury markup.We design our collections with the modern lifestyle in mind. From the drawing board to the final stitch, every piece is crafted using ethically sourced, premium fabrics designed to last. </p>
          <p>We focus on clean lines, versatile silhouettes, and sustainable practices so you can look good while doing good for the planet.Thank you for being a part of our journey. We can't wait to see how you style Forever.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>We create stylish, high-quality clothing designed for everyday confidence.
            Our mission is to make fashion accessible, affordable, and sustainable for everyone.
            We believe great style should feel good, look good, and last long.</p>
        </div>
      </div>

      <div className='text-3xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb:20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We ensure every garment meets strict quality standards before reaching you.
            From fabric selection to final stitching, each step is carefully inspected.
            Our commitment is to deliver durable, comfortable, and premium-quality clothing.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Shop anytime, anywhere with a seamless online experience.
            Easy browsing, secure checkout, and fast delivery—made simple for you.
            Fashion that fits your life, not the other way around.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Questions, concerns, or feedback—we listen and act quickly.
            Our support team is dedicated to making your experience smooth and stress-free.
            Because great service matters as much as great style.</p>
        </div>
      </div>
      <div className='mt-10'>
      <NewsletterBox/>
      </div>
    </div>
  )
}

export default About
