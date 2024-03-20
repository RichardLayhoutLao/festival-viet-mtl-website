import React from 'react';
import Instagram from '@/svg/instagram'
type IndividualCardProps = {
  name: string;
  instagram?: string;
};

const IndividualCard = ({ name, instagram }: IndividualCardProps) => {

  return (
    <>
      <div className='border-2 border-black rounded-xl p-3 w-fit text-center'>
        <div className="">{name}</div>
        {instagram && <div className='flex justify-center space-x-1'>
          <Instagram black></Instagram>
          <h1>{instagram}</h1>
        </div>}
      </div>
    </>
  );
};

export default IndividualCard;
