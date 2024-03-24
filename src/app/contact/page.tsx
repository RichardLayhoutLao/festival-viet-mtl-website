import { AccordionDemo } from '@/components/faq-accordion'
import Facebook from '@/components/svg/socials/facebook'
import Instagram from '@/components/svg/socials/instagram'
import React from 'react'

const FAQ = () => {
  return (
    <div className="bg-[#EDEBDE] container mx-auto py-36 space-y-8">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <div className='font-bold text-4xl'>Contact US</div>
            <div>
              <div className="font-semibold text-lg">How did you enjoy the Festival?</div>
              <div className="font-semibold text-lg">Send us your comments and suggestions via ou socials !</div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 w-[75%]">
              <div className="border-8 border-[#982900] rounded-xl p-16 flex justify-center hover:bg-[#982900] hover:bg-opacity-10 transition duration-100 ease-in-out"><Facebook width={150} height={150}></Facebook></div>
              <div className="border-8 border-[#982900] rounded-xl p-16 flex justify-center  hover:bg-[#982900] hover:bg-opacity-10 transition duration-100 ease-in-out"><Instagram width={150} height={150}></Instagram></div>
              <div className="border-8 border-[#982900] rounded-xl p-16 flex justify-center  hover:bg-[#982900] hover:bg-opacity-10 transition duration-100 ease-in-out"><Facebook width={150} height={150}></Facebook></div>
              <div className="border-8 border-[#982900] rounded-xl p-16 flex justify-center  hover:bg-[#982900] hover:bg-opacity-10 transition duration-100 ease-in-out"><Facebook width={150} height={150}></Facebook></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FAQ
