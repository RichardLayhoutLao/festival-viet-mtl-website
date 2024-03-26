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

const VendorPage = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const participantId = segments[2];

  const vendor = foodVendors.find((v) => v.slug === participantId);

  if (!vendor) {
    return <div>Vendor not found</div>;
  }

  return (
    <div className='text-[#982900]'>
      <div className='grid grid-cols-12 '>
        <div className='col-span-4'>
          <h1 className='text-lg font-bold'>{vendor.type}</h1>
          <h1 className='text-4xl font-bold'>{vendor.title}</h1>
          <div className='flex flex-wrap gap-2 h-22'>
            {vendor.tags?.map((tag, index) => (
              <div key={index} className={` border-2 px-2 rounded-xl`}>
                {tag}
              </div>
            ))}
            <p>{vendor.socials?.facebook}</p>
            <p>{vendor.socials?.instagram}</p>
            <p>{vendor.socials?.x}</p>
            <p>{vendor.socials?.snapchat}</p>
            <p>{vendor.socials?.youtube}</p>
          </div>
        </div>
        <div className='col-span-8'>
          <div
            style={{
              width: '50%',
              height: '400px',
              background: 'blue',
              position: 'relative',
            }}
          >
            <Image src={Logo} alt='' layout='fill' objectFit='cover' />
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-8">
          <div className="col-span-6">
            <p>{vendor.desc}</p>
          </div>
          <div className="col-span-2">  
            <Button>
              <p>{vendor.coordinates?.website}</p>
            </Button>
            <Button>
              <p>{vendor.coordinates?.phonenumber}</p>
            </Button>
            <Button>
              <p>{vendor.coordinates?.email}</p>
            </Button>
            <Button>
              <p>{vendor.coordinates?.address}</p>
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default VendorPage;
