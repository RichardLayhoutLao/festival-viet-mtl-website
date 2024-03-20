import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { Header } from '../components/header';
import Image from 'next/image';
import logo from '../../public/logo.svg';

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className='flex items-center justify-between py-6'>
        <Image
          priority
          src={logo}
          height={310}
          width={200}
          alt='Follow us on Twitter'
        />
        <Header></Header>
      </div>
            
      <div>HELLO WORLD</div>
      {/* <div>FESTIVAL VIET MONTRÉAL</div>
      <div>11-JUILLET 2024</div>
      <div>ESPLANADE DU STADE OLYMPIQUE</div>
      <div>DE 16H À 23H</div> */}
      {/* <div>FACEBOOK</div>
      <div>INSTAGRAM</div>
      <div>YOUTUBE</div>
      <div>MAIL</div> */}
    </main>
  );
}
