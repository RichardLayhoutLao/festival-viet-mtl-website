import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/download.jpeg';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Facebook from '@/svg/facebook';
import Instagram from '@/svg/instagram';
import Twitter_X from '@/svg/twitter-x';
import Tiktok from '@/svg/titok';
import Web from '@/svg/web';
import Youtube from '@/svg/youtube';

type MyComponentProps = {
  type?: string;
  title: string;
  desc: string;
  tags?: string[];
};

export const Participant: React.FC<MyComponentProps> = ({
  type,
  title,
  desc,
  tags,
}) => {

  let colors: string;
  let colorIcons: string;
  if (type === 'performer'){
    colors ="text-[#1F1F20] border-[#1F1F20]"
    colorIcons = "#1F1F20"
  } else if (type === 'food vendor'){
    colors ="text-[#982900] border-[#982900]"
    colorIcons = "#982900"
  } else if (type === 'merchant'){
    colors ="text-[#13450E] border-[#13450E]"
    colorIcons = "#13450E"
  } else if (type === 'association'){
    colors ="text-[#091D98] border-[#091D98]"
    colorIcons = "#091D98"
  }

  console.log(type)
  return (
    <Card className={`border-2  ${colors} `}>
      <div className='grid grid-cols-12 '>
        <div className='col-span-7'>
          <CardHeader className='p-4 max-h-16'>
            <CardTitle
              className={`italic ${
                title.split(' ').length > 4 ? `text-md` : ``
              }`}
            >
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className='p-4'>
            <CardDescription className={`text-sm text-${type} h-24`}>
              {desc.length > 120
                ? `${desc.substring(
                    0,
                    desc.substring(0, 120).lastIndexOf(' ')
                  )}...SEE MORE`
                : desc}
            </CardDescription>
          </CardContent>
          <CardContent className='p-4 pb-0'>
            <div className='grid grid-cols-6'>
              <Link href='/'>
                <Facebook type='merchant'></Facebook>
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
      <CardFooter className='flex flex-wrap gap-2 p-4 h-22'>
        {tags?.map((tag, index) => (
          <div
            key={index}
            className={`${colors} border-2 px-2 rounded-xl`}
          >
            {tag}
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};
