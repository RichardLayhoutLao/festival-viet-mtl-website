'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Restaurant from '@/components/svg/participants/restaurant';
import Performer from '@/components/svg/participants/performer';
import Merchant from '@/components/svg/participants/merchant';
import Association_Organisme from '@/components/svg/participants/association-organisme';
import Volunteer from '@/components/svg/participants/volunteer';
import Sponsor from '@/components/svg/participants/sponsor';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Food Vendors',
    href: '/docs/primitives/alert-dialog',
    description:
      "Proposer vos spécialités culinaires et contribuez à la diversité gastronomique de l'événement",
  },
  {
    title: 'Merchants',
    href: '/docs/primitives/hover-card',
    description:
      "Exposer et vendez vos produits, contribuant ainsi à la diversité et à l'attrait du marché de l'événement. Pas de vente de nourriture/boissons.",
  },
  {
    title: 'Performers',
    href: '/docs/primitives/progress',
    description:
      "Présentez votre talent artistique sur scène et bénéficier d'un espace gratuit pour votre performance.",
  },
  {
    title: 'Volunteers',
    href: '/docs/primitives/scroll-area',
    description:
      "Participez à des tâches clés de l'événement et vivez une expérience valorisante avec notre équipe.",
  },
  {
    title: 'Sponsors',
    href: '/docs/primitives/tabs',
    description:
      "Promouvez votre marque et soutenez l'événement pour renforcer sa portée et son succès.",
  },
  {
    title: 'Associations et organismes',
    href: '/docs/primitives/tooltip',
    description:
      "Engagez votre association ou organisme pour soutenir l'événement et valoriser votre engagement communautaire.",
  },
];

export function Header() {
  return (
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
    {/* <Header></Header> */}

    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href='/#about' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/faq' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                FAQ
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/participants' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Participants
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Apply</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/2023' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Édition 2023
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/contact' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/contact' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                EN
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 h-[125px] rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium '>        
            <div className='flex space-x-2'>
                {title === 'Food Vendors' && <Restaurant navbar />}
                {title === 'Merchants' && <Merchant navbar />}
                {title === 'Volunteers' && <Volunteer navbar />}
                {title === 'Sponsors' && <Sponsor navbar />}
                {title === 'Performers' && <Performer navbar />}
                {title === 'Associations et organismes' && <Association_Organisme navbar/>}
              <div>{title}</div>
            </div>
          </div>
          <p className='text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
