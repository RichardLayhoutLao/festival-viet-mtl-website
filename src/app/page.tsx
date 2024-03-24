import { Header } from '../components/header';

import { Participant } from '../components/participant-card';
import Restaurant from '@/components/svg/participants/restaurant';
import Performer from '@/components/svg/participants/performer';
import Merchant from '@/components/svg/participants/merchant';
import Association_Organisme from '@/components/svg/participants/association-organisme';
import IndividualCard from '@/components/individual-card';
import { foodVendors, performers, merchants, association_organisme, donators, donators2, users } from './data'

export default function Home() {
  return (
    <div>
      <div className='container mx-auto bg-red-900 h-screen py-6'>
      </div>
      <section className='container mx-auto py-48 bg-[#FFB623] text-[#982900] space-y-8'>
        <div className='flex justify-center space-x-4'>
          <Restaurant></Restaurant>
          <h1 className='text-3xl font-bold'>RESTAURANTS</h1>
        </div>
        <div className='text-xl text-center'>
          Savourez l'authenticité de la cuisine vietnamienne à travers notre
          sélection de restaurants participants.
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {foodVendors.map((vendor, index) => (
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
      {/* <section className='container mx-auto py-48 bg-[#1F1F20] text-white space-y-8'>
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

      <section className='container mx-auto py-48 bg-[#EDEBDE] text-[#1F1F20] space-y-24'>
        <div className='space-y-8'>
          <h1 className='text-3xl font-bold text-center'>NOS PARTENAIRES</h1>
          <div>
            <p className='text-xl text-center'>
              Nous sommes fiers de collaborer avec nos généreux commanditaires.
            </p>
            <p className='text-xl text-center'>
              Un grand merci à eux pour leur soutien précieux!{' '}
            </p>
          </div>
        </div>
        <div className='space-y-4'>
          <h1 className='text-2xl font-bold text-center'>MAJOR PARTNERS</h1>
          <div className='flex justify-center'>
            <div className='grid grid-cols-6 gap-4 pt-6 w-[65%] '>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='300'
                  width='200'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='300'
                  width='200'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='300'
                  width='200'
                  alt='GFG logo served from external URL'
                />
              </div>

              <div className='flex justify-center col-span-3'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='300'
                  width='200'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-3'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='300'
                  width='200'
                  alt='GFG logo served from external URL'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='space-y-4'>
          <h1 className='text-2xl font-bold text-center'>
            COLLABORATORS AND SPONSORS
          </h1>
          <div className='flex justify-center'>
            <div className='grid grid-cols-6 gap-4 pt-6 w-[65%] '>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className='container mx-auto py-48 bg-[#EDEBDE] space-y-16'>

        <h1 className='text-3xl font-bold text-center'>SPECIAL THANKS</h1>
        <div className="space-y-8">
          <h1 className='text-2xl font-bold text-center'>DONATORS</h1>
          <p className='text-xl text-center'>
            We express our deep gratitude to all who have generously donated to
            support our festival
          </p>
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 justify-center w-[65%]">
                {donators.map((donator) => (
                  <IndividualCard key={donator} name={donator} />
                ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h1 className='text-2xl font-bold text-center'>CONTRIBUTORS</h1>
          <p className='text-xl text-center'>
            A heartfelt thank you to our contributors for their invaluable time
            and skills:
          </p>
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 justify-center w-[65%]">
                {donators2.map((donator) => (
                  <IndividualCard key={donator} name={donator} />
                ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 justify-center w-[50%]">
                {users.map((donator,index) => (
                  <IndividualCard key={index} name={donator.name} instagram={donator.instagram} link={donator.link}/>
                ))}
            </div>
          </div>
        </div>
        <p className='text-xl text-center'>
          We are also grateful to all others who played a part in making this event successful !
        </p>

        
      </section> */}
    </div>
  );
}
