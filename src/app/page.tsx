import { Header } from '../components/header';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import Link from 'next/link';
import { Participant } from './card-list';

export default function Home() {
  return (
    <div>
      <div className='container mx-auto bg-red-900 h-screen py-6'>
        <div className='flex items-center justify-between py-6 '>
          <Link href='/'>
            <Image
              priority
              src={logo}
              height={3103}
              width={200}
              alt='Follow us on Twitter'
            />
          </Link>
          <Header></Header>
        </div>
      </div>
      <div className='container mx-auto h-screen py-6 bg-[#FFB623] text-[#982900]'>
        {/* <div>Explorez un festival de délices vietnamiens authentiques.</div>
        <div>
          Ut quis velit nec laoreet et laoreet qui nunc eu dignissim. Nulla
          aptent ut vitae est aenean risus at omnis lectus. Phasellus Lorem
          Ipsum, elit urna gravida ante.
        </div> */}
        <div className="grid grid-cols-3 gap-2">
          <Participant></Participant>
          <Participant></Participant>
          <Participant></Participant>
          {/* <div>05</div>
          <div>05</div> */}
        </div>
        {/* <CardWithForm></CardWithForm> */}
      </div>
      {/* <div className='container mx-auto h-screen py-6'>
        <div>Explorez un festival de délices vietnamiens authentiques.</div>
        <div>
          Ut quis velit nec laoreet et laoreet qui nunc eu dignissim. Nulla
          aptent ut vitae est aenean risus at omnis lectus. Phasellus Lorem
          Ipsum, elit urna gravida ante.
        </div>
        <div>
          Ut quis velit nec laoreet et laoreet qui nunc eu dignissim. Nulla
          aptent ut vitae est aenean risus at omnis lectus. Phasellus Lorem
          Ipsum, elit urna gravida ante.
        </div>
      </div>
      <div className='container mx-auto h-screen py-6 bg-pink-500'>
        <div>RESTAURANTS</div>
        <div>Voici les kiosques qui s</div>
        <div>La Belle Tonki</div>
      </div>
      <div className='container mx-auto h-screen py-6 bg-[#1F1F20]'>
        <div>PERFORMERS</div>
        <div>Voici les kiosques qui s</div>
        <div>La Belle Tonki</div>
      </div>
      <div className='container mx-auto h-screen py-6 bg-[#13450E]'>
        <div>MERCHANTS</div>
        <div>Voici les kiosques qui s</div>
        <div>La Belle Tonki</div>
      </div>
      <div className='container mx-auto h-screen py-6 bg-[#091D98]'>
        <div>ASSOCIATIONS & ORGANISMES</div>
        <div>Voici les kiosques qui s</div>
        <div>La Belle Tonki</div>
      </div>
      <div className='container mx-auto h-screen py-6 bg-white-500'>
        <div>#Festival viet</div>
        <div>Voici les kiosques qui s</div>
        <div>La Belle Tonki</div>
      </div>
      <div className='container mx-auto h-screen py-6 bg-white-500'>
        <div>#Festival viet</div>
        <div>Voici les kiosques qui s</div>
        <div>La Belle Tonki</div>
      </div>
      <div className='container mx-auto h-screen py-6 bg-white-500'>
        <div>NOS PARTENAIRES</div>
        <div>
          Nous sommes fiers de collaborer avec nos généreux commanditaires. Un
          grand merci à eux pour leur soutien précieux!{' '}
        </div>
        <div>La Belle Tonki</div>
      </div>
      <div className='container mx-auto h-screen py-6 bg-white-500'>
        <div>SPECIAL THANKS</div>
        <div>
          Nous sommes fiers de collaborer avec nos généreux commanditaires. Un
          grand merci à eux pour leur soutien précieux!{' '}
        </div>
        <div>La Belle Tonki</div>
      </div> */}
    </div>
  );
}
