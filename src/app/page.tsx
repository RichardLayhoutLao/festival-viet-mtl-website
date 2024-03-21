import { Header } from '../components/header';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.svg';
import { Participant } from '../components/participant-card';
import Restaurant from '@/components/svg/participants/restaurant';
import Performer from '@/components/svg/participants/performer';
import Merchant from '@/components/svg/participants/merchant';
import Association_Organisme from '@/components/svg/participants/association-organisme';
import IndividualCard from '@/components/individual-card';

const foodVendors = [
  {
    type: 'food vendor',
    title: 'Saigon Saveurs',
    desc: 'Saigon Saveurs offre une immersion dans la cuisine de rue de Saigon, mettant en vedette des saveurs authentiques et vibrantes.',
    tags: ['Phở', 'Bánh', 'Nems', 'Salade', 'Café'],
  },
  {
    type: 'food vendor',
    title: 'Hanoi Harmonie',
    desc: 'Hanoi Harmonie célèbre la richesse culinaire du Nord du Vietnam, avec des recettes traditionnelles et des ingrédients frais.',
    tags: ['Phở', 'Bún', 'Rouleaux', 'Pâtisseries', 'Thé'],
  },
  {
    type: 'food vendor',
    title: 'Lotus Bleu',
    desc: 'Lotus Bleu propose une expérience gastronomique élégante, fusionnant les saveurs vietnamiennes avec une présentation artistique.',
    tags: ['Crêpes', 'Bún', 'Mangue', 'Taro', 'Tamarin'],
  },
  {
    type: 'food vendor',
    title: 'Mekong Mystique',
    desc: "Mekong Mystique invite à un voyage culinaire le long du Mékong, explorant des plats régionaux pleins de saveurs et d'histoire.",
    tags: ['Curry', 'Riz', 'Bánh', 'Lotus', 'Jus'],
  },
  {
    type: 'food vendor',
    title: 'Impérial de Hue',
    desc: "Impérial de Hue met en avant la cuisine raffinée de l'ancienne capitale impériale, avec des plats sophistiqués et pleins de saveurs.",
    tags: ['Bún', 'Dumplings', 'Poulet', 'Riz', 'Gâteau'],
  },
  {
    type: 'food vendor',
    title: 'Da Nang Delices',
    desc: 'Da Nang Delices offre une palette de saveurs de la côte centrale, mettant en vedette des fruits de mer frais et des épices locales.',
    tags: ['Quảng', 'Crevettes', 'Gelée', 'Salade', 'Pain'],
  },
  {
    type: 'food vendor',
    title: 'Bambou Vert',
    desc: 'Bambou Vert propose une cuisine vietnamienne contemporaine, axée sur des ingrédients biologiques et des associations innovantes.',
    tags: ['Tofu', 'Phở', 'Quinoa', 'Detox', 'Dessert'],
  },
  {
    type: 'food vendor',
    title: 'Nénuphar Saigon',
    desc: 'Nénuphar Saigon est une célébration des saveurs vibrantes de Saigon, avec un menu créatif et coloré.',
    tags: ['Bánh', 'Brochettes', 'Riz', 'Crème', 'Limonade'],
  },
  {
    type: 'food vendor',
    title: "Étoile d'Annam",
    desc: "Étoile d'Annam offre une immersion dans l'élégance de la cuisine vietnamienne, avec un accent sur les plats signature et les ingrédients de saison.",
    tags: ['Boeuf', 'Rouleaux', 'Gâteaux', 'Poulet', 'Sorbet'],
  },
  {
    type: 'food vendor',
    title: "Perle d'Orient",
    desc: "Perle d'Orient met en scène une cuisine vietnamienne authentique dans un cadre moderne, avec un menu qui voyage à travers les régions du Vietnam.",
    tags: ['Fruits', 'Phở', 'Bánh'],
  },
  {
    type: 'food vendor',
    title: 'Dragon de Jade',
    desc: 'Dragon de Jade présente une cuisine vietnamienne fusion, où les traditions culinaires sont revisitées avec audace.',
    tags: ['Canard', 'Raviolis', 'Phở', 'Tapioca', 'Cocktail'],
  },
  {
    type: 'food vendor',
    title: 'Bamboo Zen',
    desc: "Bamboo Zen propose des plats vietnamiens dans un cadre relaxant et méditatif, mettant l'accent sur l'équilibre des saveurs.",
    tags: ['Rouleaux', 'Soupe', 'Salade', 'Thé', 'Gâteau'],
  },
  {
    type: 'food vendor',
    title: 'Saigon Bistro',
    desc: 'Saigon Bistro offre une expérience culinaire intime, avec une attention particulière portée aux plats de Saigon.',
    tags: ['Crevettes', 'Baguette', 'Phở', 'Crème', 'Smoothie'],
  },
  {
    type: 'food vendor',
    title: 'Hanoi Heureux',
    desc: 'Hanoi Heureux est une célébration de la cuisine de Hanoi, mettant en lumière les plats emblématiques de la ville.',
    tags: ['Poisson', 'Nems', 'Bún', 'Café', 'Dessert'],
  },
];

const performers = [
  {
    title: 'Duy Phan',
    type: 'performer',
    tags: ['musician'],
    desc: 'Experience the mesmerizing melodies and rhythms of Duy Phan as he takes you on a musical journey.',
  },
  {
    title: 'Evergrowth Dance',
    type: 'performer',
    tags: ['dance', 'performance'],
    desc: 'Witness the breathtaking performances of Evergrowth Dance, where artistry meets athleticism in a fusion of movement and expression.',
  },
  {
    title: 'VAVAVY',
    type: 'performer',
    tags: ['musician'],
    desc: 'VAVAVY brings you energetic beats and infectious tunes that will make you move and groove all night long.',
  },
  {
    title: 'Ao Dai Fashion Show',
    type: 'performer',
    tags: ['fashion', 'show'],
    desc: 'Be captivated by the elegance and beauty of the Ao Dai Fashion Show, showcasing the timeless charm of Vietnamese traditional attire.',
  },
  {
    title: 'DREA',
    type: 'performer',
    tags: ['musician'],
    desc: 'Let DREA serenade you with soulful melodies and heartfelt lyrics, creating an unforgettable musical experience.',
  },
  {
    title: 'Hajikami + Yomogi',
    type: 'performer',
    tags: ['musician', 'performance'],
    desc: 'Immerse yourself in the dynamic performances of Hajikami + Yomogi, where traditional and modern music collide in a symphony of sounds.',
  },
  {
    title: 'Parlous',
    type: 'performer',
    tags: ['musician'],
    desc: 'Get ready to rock out with Parlous as they deliver electrifying performances that will leave you wanting more.',
  },
  {
    title: 'Mando',
    type: 'performer',
    tags: ['musician'],
    desc: "Experience the magic of Mando's music, where catchy tunes and heartfelt lyrics come together to create an unforgettable auditory experience.",
  },
  {
    title: 'Yenny Yuka',
    type: 'performer',
    tags: ['musician'],
    desc: 'Let Yenny Yuka serenade you with her soulful voice and heartfelt lyrics, transporting you to a world of emotion and melody.',
  },
  {
    title: 'Lil Waterboi',
    type: 'performer',
    tags: ['musician'],
    desc: 'Get ready to groove with Lil Waterboi as he brings you infectious beats and catchy tunes that will keep you dancing all night long.',
  },
  {
    title: 'Arthur Murray Dance Schools and association',
    type: 'performer',
    tags: ['dance', 'school'],
    desc: 'Learn the art of dance from the experts at Arthur Murray Dance Schools, where passion and skill come together to create beautiful performances.',
  },
  {
    title: 'Association de vietnamien de montreal',
    type: 'performer',
    tags: ['martial', 'arts', 'instructor'],
    desc: 'Experience the discipline and grace of martial arts with Sa Long Cuong, where tradition meets modernity in a display of skill and mastery.',
  },
];

const merchants = [
  {
    type: 'merchant',
    title: 'Saigon Saveurs',
    desc: 'Saigon Saveurs offre une immersion dans la cuisine de rue de Saigon, mettant en vedette des saveurs authentiques et vibrantes.',
    tags: ['Phở', 'Bánh', 'Nems', 'Salade', 'Café'],
  },
  {
    type: 'merchant',
    title: 'Hanoi Harmonie',
    desc: 'Hanoi Harmonie célèbre la richesse culinaire du Nord du Vietnam, avec des recettes traditionnelles et des ingrédients frais.',
    tags: ['Phở', 'Bún', 'Rouleaux', 'Pâtisseries', 'Thé'],
  },
  {
    type: 'merchant',
    title: 'Lotus Bleu',
    desc: 'Lotus Bleu propose une expérience gastronomique élégante, fusionnant les saveurs vietnamiennes avec une présentation artistique.',
    tags: ['Crêpes', 'Bún', 'Mangue', 'Taro', 'Tamarin'],
  },
  {
    type: 'merchant',
    title: 'Mekong Mystique',
    desc: "Mekong Mystique invite à un voyage culinaire le long du Mékong, explorant des plats régionaux pleins de saveurs et d'histoire.",
    tags: ['Curry', 'Riz', 'Bánh', 'Lotus', 'Jus'],
  },
  {
    type: 'merchant',
    title: 'Impérial de Hue',
    desc: "Impérial de Hue met en avant la cuisine raffinée de l'ancienne capitale impériale, avec des plats sophistiqués et pleins de saveurs.",
    tags: ['Bún', 'Dumplings', 'Poulet', 'Riz', 'Gâteau'],
  },
  {
    type: 'merchant',
    title: 'Da Nang Delices',
    desc: 'Da Nang Delices offre une palette de saveurs de la côte centrale, mettant en vedette des fruits de mer frais et des épices locales.',
    tags: ['Quảng', 'Crevettes', 'Gelée', 'Salade', 'Pain'],
  },
  {
    type: 'merchant',
    title: 'Bambou Vert',
    desc: 'Bambou Vert propose une cuisine vietnamienne contemporaine, axée sur des ingrédients biologiques et des associations innovantes.',
    tags: ['Tofu', 'Phở', 'Quinoa', 'Detox', 'Dessert'],
  },
  {
    type: 'merchant',
    title: 'Nénuphar Saigon',
    desc: 'Nénuphar Saigon est une célébration des saveurs vibrantes de Saigon, avec un menu créatif et coloré.',
    tags: ['Bánh', 'Brochettes', 'Riz', 'Crème', 'Limonade'],
  },
  {
    type: 'merchant',
    title: "Étoile d'Annam",
    desc: "Étoile d'Annam offre une immersion dans l'élégance de la cuisine vietnamienne, avec un accent sur les plats signature et les ingrédients de saison.",
    tags: ['Boeuf', 'Rouleaux', 'Gâteaux', 'Poulet', 'Sorbet'],
  },
  {
    type: 'merchant',
    title: "Perle d'Orient",
    desc: "Perle d'Orient met en scène une cuisine vietnamienne authentique dans un cadre moderne, avec un menu qui voyage à travers les régions du Vietnam.",
    tags: ['Fruits', 'Phở', 'Bánh'],
  },
  {
    type: 'merchant',
    title: 'Dragon de Jade',
    desc: 'Dragon de Jade présente une cuisine vietnamienne fusion, où les traditions culinaires sont revisitées avec audace.',
    tags: ['Canard', 'Raviolis', 'Phở', 'Tapioca', 'Cocktail'],
  },
  {
    type: 'merchant',
    title: 'Bamboo Zen',
    desc: "Bamboo Zen propose des plats vietnamiens dans un cadre relaxant et méditatif, mettant l'accent sur l'équilibre des saveurs.",
    tags: ['Rouleaux', 'Soupe', 'Salade', 'Thé', 'Gâteau'],
  },
  {
    type: 'merchant',
    title: 'Saigon Bistro',
    desc: 'Saigon Bistro offre une expérience culinaire intime, avec une attention particulière portée aux plats de Saigon.',
    tags: ['Crevettes', 'Baguette', 'Phở', 'Crème', 'Smoothie'],
  },
  {
    type: 'merchant',
    title: 'Hanoi Heureux',
    desc: 'Hanoi Heureux est une célébration de la cuisine de Hanoi, mettant en lumière les plats emblématiques de la ville.',
    tags: ['Poisson', 'Nems', 'Bún', 'Café', 'Dessert'],
  },
];

const association_organisme = [
  {
    type: 'association',
    title: 'Saigon Saveurs',
    desc: 'Saigon Saveurs offre une immersion dans la cuisine de rue de Saigon, mettant en vedette des saveurs authentiques et vibrantes.',
    tags: ['Phở', 'Bánh', 'Nems', 'Salade', 'Café'],
  },
  {
    type: 'association',
    title: 'Hanoi Harmonie',
    desc: 'Hanoi Harmonie célèbre la richesse culinaire du Nord du Vietnam, avec des recettes traditionnelles et des ingrédients frais.',
    tags: ['Phở', 'Bún', 'Rouleaux', 'Pâtisseries', 'Thé'],
  },
  {
    type: 'association',
    title: 'Lotus Bleu',
    desc: 'Lotus Bleu propose une expérience gastronomique élégante, fusionnant les saveurs vietnamiennes avec une présentation artistique.',
    tags: ['Crêpes', 'Bún', 'Mangue', 'Taro', 'Tamarin'],
  },
  {
    type: 'association',
    title: 'Mekong Mystique',
    desc: "Mekong Mystique invite à un voyage culinaire le long du Mékong, explorant des plats régionaux pleins de saveurs et d'histoire.",
    tags: ['Curry', 'Riz', 'Bánh', 'Lotus', 'Jus'],
  },
  {
    type: 'association',
    title: 'Impérial de Hue',
    desc: "Impérial de Hue met en avant la cuisine raffinée de l'ancienne capitale impériale, avec des plats sophistiqués et pleins de saveurs.",
    tags: ['Bún', 'Dumplings', 'Poulet', 'Riz', 'Gâteau'],
  },
  {
    type: 'association',
    title: 'Da Nang Delices',
    desc: 'Da Nang Delices offre une palette de saveurs de la côte centrale, mettant en vedette des fruits de mer frais et des épices locales.',
    tags: ['Quảng', 'Crevettes', 'Gelée', 'Salade', 'Pain'],
  },
  {
    type: 'association',
    title: 'Bambou Vert',
    desc: 'Bambou Vert propose une cuisine vietnamienne contemporaine, axée sur des ingrédients biologiques et des associations innovantes.',
    tags: ['Tofu', 'Phở', 'Quinoa', 'Detox', 'Dessert'],
  },
  {
    type: 'association',
    title: 'Nénuphar Saigon',
    desc: 'Nénuphar Saigon est une célébration des saveurs vibrantes de Saigon, avec un menu créatif et coloré.',
    tags: ['Bánh', 'Brochettes', 'Riz', 'Crème', 'Limonade'],
  },
  {
    type: 'association',
    title: "Étoile d'Annam",
    desc: "Étoile d'Annam offre une immersion dans l'élégance de la cuisine vietnamienne, avec un accent sur les plats signature et les ingrédients de saison.",
    tags: ['Boeuf', 'Rouleaux', 'Gâteaux', 'Poulet', 'Sorbet'],
  },
  {
    type: 'association',
    title: "Perle d'Orient",
    desc: "Perle d'Orient met en scène une cuisine vietnamienne authentique dans un cadre moderne, avec un menu qui voyage à travers les régions du Vietnam.",
    tags: ['Fruits', 'Phở', 'Bánh'],
  },
  {
    type: 'association',
    title: 'Dragon de Jade',
    desc: 'Dragon de Jade présente une cuisine vietnamienne fusion, où les traditions culinaires sont revisitées avec audace.',
    tags: ['Canard', 'Raviolis', 'Phở', 'Tapioca', 'Cocktail'],
  },
];

const donators = [
  'Michael Nguyen Tran',
  'Sophia Le Nguyen',
  'Ethan Pham Bao',
  'Olivia Huynh Mai',
  'Daniel Vu Thanh',
  'Emma Dang Linh',
  'Alexander Bui',
  'Isabella Do',
  'William Hoang Tuan',
  'Ava Ngo',
  'Benjamin Ly Hieu',
  'Olivia Mai',
  'Alexandra Bui',
];

const donators2 = [
  'Sophia Le Nguyen',
  'Michael Nguyen Tran',
  'Alexander Bui',
  'William Hoang Tuan',
  'Daniel Vu Thanh',
  'Isabella Do',
  'Ava Ngo',
  'Emma Dang Linh',
  'Ethan Pham Bao',
  'Olivia Huynh Mai',
  'Benjamin Ly Hieu',
  'Olivia Mai',
  'Alexandra Bui',
];

const users = [
  { name: "Camille", instagram: "eonnigiri", link:"https://www.instagram.com/eonnigiri/" },
  { name: "Miissa", instagram: "purplem33", link:"https://www.instagram.com/purplem33/" },
  { name: "Nick Huu", instagram: "nick.huu", link:"https://www.instagram.com/nick.huu/" },
  { name: "Chanh", instagram: "_onebrushman", link:"https://www.instagram.com/_onebrushman/" },
  { name: "Richard", instagram: "ricecar_", link:"https://www.instagram.com/ricecar_/" },
  { name: "Maximo", instagram: "minigodesign111", link:"https://www.instagram.com/minigodesign111/" }
];

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
      <section className='container mx-auto py-48 bg-[#FFB623] text-[#982900] space-y-8'>
        <div className='flex justify-center space-x-4'>
          <Restaurant></Restaurant>
          <h1 className='text-3xl font-bold'>RESTAURANTS</h1>
        </div>
        <div className='text-xl text-center'>
          Savourez l'authenticité de la cuisine vietnamienne à travers notre
          sélection de restaurants participants.
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {foodVendors.map((vendor, index) => (
            <Participant
              key={index}
              title={vendor.title}
              desc={vendor.desc}
              tags={vendor.tags}
              type={vendor.type}
            ></Participant>
          ))}
        </div>
      </section>
      <section className='container mx-auto py-48 bg-[#1F1F20] text-white space-y-8'>
        <div className='flex justify-center space-x-4'>
          <Performer></Performer>
          <h1 className='text-3xl font-bold'>PERFORMERS</h1>
        </div>
        <div className='text-xl text-center'>
          Partagez l'énergie créative et l'expression artistique du Vietnam lors
          de nos spectacles uniques et mémorables.
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {performers.map((vendor, index) => (
            <Participant
              key={index}
              title={vendor.title}
              desc={vendor.desc}
              tags={vendor.tags}
              type={vendor.type}
            ></Participant>
          ))}
        </div>
      </section>

      <section className='container mx-auto py-48 bg-[#EDEBDE] text-[#13450E] space-y-8'>
        <div className='flex justify-center space-x-4'>
          <Merchant></Merchant>
          <h1 className='text-3xl font-bold'>MERCHANTS</h1>
        </div>
        <div className='text-xl text-center'>
          Bénéficiez de la finesse et de l'expertise vietnamiennes chez nos
          marchands sélectionnés.
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {merchants.map((merchant, index) => (
            <Participant
              key={index}
              title={merchant.title}
              desc={merchant.desc}
              tags={merchant.tags}
              type={merchant.type}
            ></Participant>
          ))}
        </div>
      </section>

      <section className='container mx-auto py-48 bg-[#EDEBDE] text-[#091D98] space-y-8'>
        <div className='flex justify-center space-x-4'>
          <Association_Organisme></Association_Organisme>
          <h1 className='text-3xl font-bold'>ASSOCIATION & ORGANISATION</h1>
        </div>
        <div className='text-xl text-center'>
          Savourez l'authenticité de la cuisine vietnamienne à travers notre
          sélection de restaurants participants
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {association_organisme.map((merchant, index) => (
            <Participant
              key={index}
              title={merchant.title}
              desc={merchant.desc}
              tags={merchant.tags}
              type={merchant.type}
            ></Participant>
          ))}
        </div>
      </section>

      <section className='container mx-auto py-48 bg-[#EDEBDE] text-[#1F1F20] space-y-24'>
        <div className='space-y-8'>
          <h1 className='text-3xl font-bold text-center'>NOS PARTENAIRES</h1>
          <div>
            <p className='text-xl text-center'>
              Nous sommes fiers de collaborer avec nos généreux commanditaires.
            </p>
            <p className='text-xl text-center'>
              Un grand merci à eux pour leur soutien précieux!{' '}
            </p>
          </div>
        </div>
        <div className='space-y-4'>
          <h1 className='text-2xl font-bold text-center'>MAJOR PARTNERS</h1>
          <div className='flex justify-center'>
            <div className='grid grid-cols-6 gap-4 pt-6 w-[65%] '>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='300'
                  width='200'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='300'
                  width='200'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='300'
                  width='200'
                  alt='GFG logo served from external URL'
                />
              </div>

              <div className='flex justify-center col-span-3'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='300'
                  width='200'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-3'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='300'
                  width='200'
                  alt='GFG logo served from external URL'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='space-y-4'>
          <h1 className='text-2xl font-bold text-center'>
            COLLABORATORS AND SPONSORS
          </h1>
          <div className='flex justify-center'>
            <div className='grid grid-cols-6 gap-4 pt-6 w-[65%] '>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <Image
                  src='https://img.logoipsum.com/332.svg'
                  height='200'
                  width='100'
                  alt='GFG logo served from external URL'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container mx-auto py-48 bg-[#EDEBDE] space-y-16'>

        <h1 className='text-3xl font-bold text-center'>SPECIAL THANKS</h1>
        <div className="space-y-8">
          <h1 className='text-2xl font-bold text-center'>DONATORS</h1>
          <p className='text-xl text-center'>
            We express our deep gratitude to all who have generously donated to
            support our festival
          </p>
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 justify-center w-[65%]">
                {donators.map((donator) => (
                  <IndividualCard key={donator} name={donator} />
                ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h1 className='text-2xl font-bold text-center'>CONTRIBUTORS</h1>
          <p className='text-xl text-center'>
            A heartfelt thank you to our contributors for their invaluable time
            and skills:
          </p>
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 justify-center w-[65%]">
                {donators2.map((donator) => (
                  <IndividualCard key={donator} name={donator} />
                ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 justify-center w-[50%]">
                {users.map((donator,index) => (
                  <IndividualCard key={index} name={donator.name} instagram={donator.instagram} link={donator.link}/>
                ))}
            </div>
          </div>
        </div>
        <p className='text-xl text-center'>
          We are also grateful to all others who played a part in making this event successful !
        </p>

        
      </section>
    </div>
  );
}
