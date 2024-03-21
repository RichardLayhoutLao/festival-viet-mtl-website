import Link from 'next/link';
import Facebook from '@/components/svg/socials/facebook';
import Instagram from '@/components/svg/socials/instagram';
import Youtube from '@/components/svg/socials/youtube';
import Github from '@/components/svg/socials/github';
import Heart from '@/components/svg/heart';
import FestivalVietMtl from '@/components/svg/festival-viet-mtl-logo';
import Mail from '@/components/svg/socials/mail';

const routes = [
  {
    path: '/terms-conditions',
    name: 'Terms & Conditions',
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
  },
];

export default function Footer() {
  return (
    <footer className='mt-auto items-center justify-between h-auto border-t border-white/10 px-3 sm:px-9 bg-[#FFB623] font-semibold text-base text-[#982900]'>
      {/* <small className="text-xs">
        &copy; 2050 ByteGrad. All rights reserved.
      </small> */}

      <div className="grid grid-cols-3 py-12">
        <div className="flex justify-center">
            <div className="flex flex-col justify-between">
                <FestivalVietMtl></FestivalVietMtl>
                <div className="text-sm">
                    <div>Festival Viet Montréal 2024</div>
                    <div>© All rights reserved</div>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="space-y-4">
                <div className="text-2xl">LIENS UTILES</div>
                <div className="text-sm space-y-2">
                    <div><Link href="/about" legacyBehavior passHref>ABOUT</Link></div>
                    <div><Link href="/faq" legacyBehavior passHref>FAQ</Link></div>
                    <div><Link href="/participant" legacyBehavior passHref>PARTICIPANT</Link></div>
                    <div><Link href="/apply" legacyBehavior passHref>APPLY</Link></div>
                    <div><Link href="/2023" legacyBehavior passHref>ÉDITION 2023</Link></div>
                    <div><Link href="/contact" legacyBehavior passHref>CONTACT</Link></div>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="space-y-4">
                <div className="text-2xl">SOCIALS</div>
                <div className="flex space-x-4">
                    <Facebook footer></Facebook>
                    <Instagram footer></Instagram>
                    <Youtube footer></Youtube>
                    <Mail footer></Mail>
                    {/* 
                    <Youtube></Youtube>
                    <Facebook></Facebook> */}
                </div>
            </div>
        </div>
      </div>


      <div className='text-center pb-4'>
        <div className='flex justify-center'>
          Developed with <span className='px-1'><Heart /></span>using Next.js
        </div>
        <Link className='flex justify-center space-x-1' href={'https://richardlayhoutlao.dev'}>
          <div>Made by Richard Layhout Lao</div>
          <Github></Github>
        </Link>
      </div>
    </footer>
  );
}
