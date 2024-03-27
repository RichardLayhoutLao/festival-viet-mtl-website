import React from 'react'
import Restaurant from '@/components/svg/participants/restaurant';
import Link from 'next/link';
import Performer from '@/components/svg/participants/performer';
import Merchant from '@/components/svg/participants/merchant';
import Association_Organisme from '@/components/svg/participants/association-organisme';
import { foodVendors, performers, merchants, association_organisme, donators, donators2, users } from '../data'
import { Participant } from '../../components/participant-card';
const BlogPage = () => {
    return (
      <>
        <p className="text-3xl">Blog Page</p>
        <div className='grid grid-cols-3 gap-4'>
          {foodVendors.map((vendor, index) => (
            <Link key={index} href={`/participants/${vendor.slug}`} legacyBehavior >
                <Participant
                  title={vendor.title}
                  desc={vendor.desc}
                  tags={vendor.tags}
                  type={vendor.type}
                ></Participant>
            </Link>
          ))}
        </div>

        <section className='container mx-auto py-48 bg-[#1F1F20] text-white space-y-8'>
        <div className='flex justify-center space-x-4'>
          <Performer></Performer>
          <h1 className='text-3xl font-bold'>PERFORMERS</h1>
        </div>
        <div className='text-xl text-center'>
          Partagez l'énergie créative et l'expression artistique du Vietnam lors
          de nos spectacles uniques et mémorables.
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {performers.map((vendor, index) => (
            <Participant
              key={index}
              title={vendor.title}
              desc={vendor.desc}
              tags={vendor.tags}
              type={vendor.type}
            ></Participant>
          ))}
        </div>
      </section>

      <section className='container mx-auto py-48 bg-[#EDEBDE] text-[#13450E] space-y-8'>
        <div className='flex justify-center space-x-4'>
          <Merchant></Merchant>
          <h1 className='text-3xl font-bold'>MERCHANTS</h1>
        </div>
        <div className='text-xl text-center'>
          Bénéficiez de la finesse et de l'expertise vietnamiennes chez nos
          marchands sélectionnés.
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {merchants.map((merchant, index) => (
            <Participant
              key={index}
              title={merchant.title}
              desc={merchant.desc}
              tags={merchant.tags}
              type={merchant.type}
            ></Participant>
          ))}
        </div>
      </section>

      <section className='container mx-auto py-48 bg-[#EDEBDE] text-[#091D98] space-y-8'>
        <div className='flex justify-center space-x-4'>
          <Association_Organisme></Association_Organisme>
          <h1 className='text-3xl font-bold'>ASSOCIATION & ORGANISATION</h1>
        </div>
        <div className='text-xl text-center'>
          Savourez l'authenticité de la cuisine vietnamienne à travers notre
          sélection de restaurants participants
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {association_organisme.map((merchant, index) => (
            <Participant
              key={index}
              title={merchant.title}
              desc={merchant.desc}
              tags={merchant.tags}
              type={merchant.type}
            ></Participant>
          ))}
        </div>
      </section>

      </>
    )
  }
  
  export default BlogPage;