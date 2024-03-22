import { AccordionDemo } from '@/components/faq-accordion'
import React from 'react'

const FAQ = () => {
  return (
    <div className="bg-[#EDEBDE] container mx-auto py-36 space-y-8">
        <div className="text-center space-y-6">
          <div className='font-bold text-4xl'>Frequently asked questions</div>
          <div className="font-semibold text-lg">Questions you might ask about Festival Viet Montréal</div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="w-[75%]">
            <AccordionDemo></AccordionDemo>
          </div>
        </div>
    </div>
  )
}

export default FAQ