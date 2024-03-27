'use client';
import { usePathname } from 'next/navigation';
import {
  foodVendors,
  performers,
  merchants,
  association_organisme,
  donators,
  donators2,
  users,
} from '../../data';
import Image from 'next/image';
import Logo from '@/public/download.jpeg';
import { Button } from '@/components/ui/button';
import Facebook from '@/components/svg/socials/facebook';
import Instagram from '@/components/svg/socials/instagram';
import Twitter_X from '@/components/svg/socials/twitter-x';
import Youtube from '@/components/svg/socials/youtube';
import Tiktok from '@/components/svg/socials/tiktok';
import Web from '@/components/svg/socials/web';

import Restaurant from '@/components/svg/participants/restaurant';
import Performer from '@/components/svg/participants/performer';
import Merchant from '@/components/svg/participants/merchant';
import Association_Organisme from '@/components/svg/participants/association-organisme';
import Volunteer from '@/components/svg/participants/volunteer';
import Sponsor from '@/components/svg/participants/sponsor';

const VendorPage = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const participantId = segments[2];

  const vendor = foodVendors.find((v) => v.slug === participantId);

  if (!vendor) {
    return <div>Vendor not found</div>;
  }

  return (
    <div className='text-[#982900] py-12'>
      <div className='grid grid-cols-12 p-6'>
        <div className='col-span-5 flex flex-col justify-between'>
          <div className='space-y-4'>
            <div className='flex space-x-4'>
              <Restaurant width={28} height={28}></Restaurant>
              <h1 className='text-xl font-bold'>{vendor.type}</h1>
            </div>
            <h1 className='text-6xl font-bold'>{vendor.title}</h1>
          </div>
          <div className='flex flex-wrap gap-2 h-22 text-2xl font-medium'>
            {vendor.tags?.map((tag, index) => (
              <div
                key={index}
                className={`border-2 px-2 rounded-xl border-[#982900]`}
              >
                {tag}
              </div>
            ))}
          </div>
          <div className='flex flex-wrap gap-2 h-22 space-x-4'>
            {vendor.socials?.facebook && <Facebook individual></Facebook>}
            {vendor.socials?.instagram && <Instagram individual></Instagram>}
            {vendor.socials?.x && <Twitter_X individual></Twitter_X>}
            {vendor.socials?.tiktok && <Tiktok individual></Tiktok>}
            {vendor.socials?.youtube && <Youtube individual></Youtube>}
          </div>
        </div>
        <div className='col-span-7 flex justify-end rounded-xl'>
          <div
            className=' rounded-xl'
            style={{
              width: '75%',
              height: '300px',
              background: 'blue',
              position: 'relative',
            }}
          >
            <Image
              className=' rounded-xl'
              src={Logo}
              alt=''
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
      <div>
        <div className='grid grid-cols-12 pt-16'>
          <div className='col-span-8 p-6 text-lg space-y-6'>
            <p className='text-4xl font-medium'>Description</p>
            <p>{vendor.desc}</p>
          </div>
          <div className='col-span-4 p-6 space-y-6 '>
            {/* <Button
              variant='outline'
              className='w-full text-xl font-medium border-2 px-2 rounded-xl border-[#982900]'
            >
              <Web></Web>
              {vendor.coordinates?.website}
            </Button> */}
            {/* <Button
              variant='outline'
              className='w-full text-xl font-medium border-2 px-2 rounded-xl border-[#982900]'
            >
              <Web></Web>
              {vendor.coordinates?.phonenumber}
            </Button> */}
            {/* <Button
              variant='outline'
              className='w-full text-xl font-medium border-2 px-2 rounded-xl border-[#982900]'
            >
              <Web></Web>
              {vendor.coordinates?.email}
            </Button> */}
            <Button
              variant='outline'
              className='w-full text-xl font-medium border-2 p-8 px-4 rounded-xl border-[#982900]'
            >
              <div className="grid grid-cols-12 w-full">
                <div className="col-span-1">
                  <Web></Web>
                </div>
                <div className="col-span-11 flex justify-center">{vendor.coordinates?.website}</div>
              </div>
            </Button>
            <Button
              variant='outline'
              className='w-full text-xl font-medium border-2 p-8 px-4 rounded-xl border-[#982900]'
            >
              <div className="grid grid-cols-12 w-full">
                <div className="col-span-1">
                  <Web></Web>
                </div>
                <div className="col-span-11 flex justify-center">{vendor.coordinates?.phonenumber}</div>
              </div>
            </Button>
            <Button
              variant='outline'
              className='w-full text-xl font-medium border-2 p-8 px-4 rounded-xl border-[#982900]'
            >
              <div className="grid grid-cols-12 w-full">
                <div className="col-span-1">
                  <Web></Web>
                </div>
                <div className="col-span-11 flex justify-center">{vendor.coordinates?.email}</div>
              </div>
            </Button>
            <Button
              variant='outline'
              className='w-full text-xl font-medium border-2 p-8 px-4 rounded-xl border-[#982900]'
            >
              <div className="grid grid-cols-12 w-full">
                <div className="col-span-1">
                  <Web></Web>
                </div>
                <div className="col-span-11 flex justify-center">{vendor.coordinates?.address}</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorPage;
