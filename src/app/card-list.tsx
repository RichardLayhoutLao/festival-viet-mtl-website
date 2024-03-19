import * as React from 'react';
import Image from 'next/image';
import Logo from '../../public/download.jpeg';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Facebook from '../components/svg/facebook';
import Instagram from '../components/svg/instagram';
import Twitter_X from '../components/svg/twitter-x';
import Tiktok from '../components/svg/titok';
import Web from '../components/svg/web';
import Youtube from '../components/svg/youtube';
import Link from 'next/link';

type MyComponentProps = {
  type: string;
  tags: string[];
};

export const Participant: React.FC<MyComponentProps> = ({
  type = 'vendors',
  tags = ['Poutine', 'Bánh Mì', 'Concombre', 'Papaye', 'Marshmallow '],
}) => {
  return (
    <Card className={`border-2  border-${type}`}>
      <div className='grid grid-cols-12 '>
        <div className='col-span-7'>
          <CardHeader className='p-4'>
            <CardTitle className={`text-${type}`}>
              La belle tonkinoise
            </CardTitle>
          </CardHeader>
          <CardContent className='p-4'>
            <CardDescription className={`text-sm text-${type}`}>
              La 2Belle Tonkinoise est un stand de street food vietnamien qui
              brille lors des festivals avec son offre de plats traditionnels
              revisités.
            </CardDescription>
          </CardContent>
          <CardContent className='p-4 pb-0'>
            <div className='grid grid-cols-6'>
              <Link href='/'>
                <Facebook type="merchant"></Facebook>
              </Link>
              <Link href='/'>
                <Instagram></Instagram>
              </Link>
              <Link href='/'>
                <Twitter_X></Twitter_X>
              </Link>
              <Link href='/'>
                <Tiktok></Tiktok>
              </Link>
              <Link href='/'>
                <Web></Web>
              </Link>
              <Link href='/'>
                <Youtube></Youtube>
              </Link>
            </div>
          </CardContent>
        </div>
        <div className='col-span-5 pt-3 pr-3 '>
          <div className='relative overflow-hidden h-full rounded-lg'>
            <Image
              src={Logo}
              alt='Image'
              fill={true}
              className='object-cover '
            />
          </div>
        </div>
      </div>
      <CardFooter className='flex flex-wrap gap-2 p-4'>
        {tags.map((tag,index) => (
          <div key={index} className={`border-${type} border-2 p-2 rounded-xl text-${type}`}>
            {tag}
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};
