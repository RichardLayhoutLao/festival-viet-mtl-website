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
      <div className="grid grid-cols-3 py-12">
        <div className="flex justify-center">
            <div className="flex flex-col justify-between">
            <Link href="/">
                <FestivalVietMtl></FestivalVietMtl>
            </Link>
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
                    <div><Link href="/about">ABOUT</Link></div>
                    <div><Link href="/faq">FAQ</Link></div>
                    <div><Link href="/participant">PARTICIPANT</Link></div>
                    <div><Link href="/apply">APPLY</Link></div>
                    <div><Link href="/2023">ÉDITION 2023</Link></div>
                    <div><Link href="/contact">CONTACT</Link></div>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="space-y-4">
                <div className="text-2xl">SOCIALS</div>
                <div className="flex space-x-4">
                <Link href="https://www.facebook.com/p/Festival-Viet-Montr%C3%A9al-100027689933508/"><Facebook footer></Facebook></Link>
                <Link href="https://www.instagram.com/festivalvietmtl/"><Instagram footer></Instagram></Link>
                <Link href="https://www.youtube.com/results?search_query=festival+viet+montreal"><Youtube footer></Youtube></Link>
                <Link href="mailto:FestivalVietMtl@gmail.com"><Mail footer></Mail></Link>
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
