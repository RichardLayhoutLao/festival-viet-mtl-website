import React from 'react';
import Instagram from '@/components/svg/socials/instagram';
import Link from 'next/link';

type IndividualCardProps = {
  name: string;
  instagram?: string;
  link?: string;
};

const IndividualCard = ({ name, instagram, link }: IndividualCardProps) => {
  const content = (
    <div className='border-2 border-black rounded-xl p-3 w-fit text-center'>
      <div>{name}</div>
      {instagram && (
        <div className='flex justify-center space-x-1'>
          <Instagram black />
          <h1>{instagram}</h1>
        </div>
      )}
    </div>
  );

  return link ? <Link className='hover:bg-gray-800 hover:bg-opacity-10 transition duration-100 ease-in-out rounded-xl ' href={link}>{content}</Link> : content;
};

export default IndividualCard;
