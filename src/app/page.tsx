import { Header } from '../components/header';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import Link from 'next/link';
import { Participant } from '../components/participant-card';
import Restaurant from '@/svg/restaurant';

const foodVendors = [
  {
    "type": "food",
    "title": "Saigon Saveurs",
    "desc": "Saigon Saveurs offre une immersion dans la cuisine de rue de Saigon, mettant en vedette des saveurs authentiques et vibrantes.",
    "tags": ["Phở", "Bánh", "Nems", "Salade", "Café"]
  },
  {
    "title": "Hanoi Harmonie",
    "desc": "Hanoi Harmonie célèbre la richesse culinaire du Nord du Vietnam, avec des recettes traditionnelles et des ingrédients frais.",
    "tags": ["Phở", "Bún", "Rouleaux", "Pâtisseries", "Thé"]
  },
  {
    "title": "Lotus Bleu",
    "desc": "Lotus Bleu propose une expérience gastronomique élégante, fusionnant les saveurs vietnamiennes avec une présentation artistique.",
    "tags": ["Crêpes", "Bún", "Mangue", "Taro", "Tamarin"]
  },
  {
    "title": "Mekong Mystique",
    "desc": "Mekong Mystique invite à un voyage culinaire le long du Mékong, explorant des plats régionaux pleins de saveurs et d'histoire.",
    "tags": ["Curry", "Riz", "Bánh", "Lotus", "Jus"]
  },
  {
    "title": "Impérial de Hue",
    "desc": "Impérial de Hue met en avant la cuisine raffinée de l'ancienne capitale impériale, avec des plats sophistiqués et pleins de saveurs.",
    "tags": ["Bún", "Dumplings", "Poulet", "Riz", "Gâteau"]
  },
  {
    "title": "Da Nang Delices",
    "desc": "Da Nang Delices offre une palette de saveurs de la côte centrale, mettant en vedette des fruits de mer frais et des épices locales.",
    "tags": ["Quảng", "Crevettes", "Gelée", "Salade", "Pain"]
  },
  {
    "title": "Bambou Vert",
    "desc": "Bambou Vert propose une cuisine vietnamienne contemporaine, axée sur des ingrédients biologiques et des associations innovantes.",
    "tags": ["Tofu", "Phở", "Quinoa", "Detox", "Dessert"]
  },
  {
    "title": "Nénuphar Saigon",
    "desc": "Nénuphar Saigon est une célébration des saveurs vibrantes de Saigon, avec un menu créatif et coloré.",
    "tags": ["Bánh", "Brochettes", "Riz", "Crème", "Limonade"]
  },
  {
    "title": "Étoile d'Annam",
    "desc": "Étoile d'Annam offre une immersion dans l'élégance de la cuisine vietnamienne, avec un accent sur les plats signature et les ingrédients de saison.",
    "tags": ["Boeuf", "Rouleaux", "Gâteaux", "Poulet", "Sorbet"]
  },
  {
    "title": "Perle d'Orient",
    "desc": "Perle d'Orient met en scène une cuisine vietnamienne authentique dans un cadre moderne, avec un menu qui voyage à travers les régions du Vietnam.",
    "tags": ["Fruits", "Phở", "Bánh"]
  },
  {
    "title": "Dragon de Jade",
    "desc": "Dragon de Jade présente une cuisine vietnamienne fusion, où les traditions culinaires sont revisitées avec audace.",
    "tags": ["Canard", "Raviolis", "Phở", "Tapioca", "Cocktail"]
  },
  {
    "title": "Bamboo Zen",
    "desc": "Bamboo Zen propose des plats vietnamiens dans un cadre relaxant et méditatif, mettant l'accent sur l'équilibre des saveurs.",
    "tags": ["Rouleaux", "Soupe", "Salade", "Thé", "Gâteau"]
  },
  {
    "title": "Saigon Bistro",
    "desc": "Saigon Bistro offre une expérience culinaire intime, avec une attention particulière portée aux plats de Saigon.",
    "tags": ["Crevettes", "Baguette", "Phở", "Crème", "Smoothie"]
  },
  {
    "title": "Hanoi Heureux",
    "desc": "Hanoi Heureux est une célébration de la cuisine de Hanoi, mettant en lumière les plats emblématiques de la ville.",
    "tags": ["Poisson", "Nems", "Bún", "Café", "Dessert"]
  },
]

const performers = [
  {
    "title": "Duy Phan",
    "type": "performer",
    "tags": ["musician"],
    "desc": "Experience the mesmerizing melodies and rhythms of Duy Phan as he takes you on a musical journey."
  },
  {
    "title": "Evergrowth Dance",
    "type": "performer",
    "tags": ["dance", "performance"],
    "desc": "Witness the breathtaking performances of Evergrowth Dance, where artistry meets athleticism in a fusion of movement and expression."
  },
  {
    "title": "VAVAVY",
    "type": "performer",
    "tags": ["musician"],
    "desc": "VAVAVY brings you energetic beats and infectious tunes that will make you move and groove all night long."
  },
  {
    "title": "Ao Dai Fashion Show",
    "type": "performer",
    "tags": ["fashion", "show"],
    "desc": "Be captivated by the elegance and beauty of the Ao Dai Fashion Show, showcasing the timeless charm of Vietnamese traditional attire."
  },
  {
    "title": "DREA",
    "type": "performer",
    "tags": ["musician"],
    "desc": "Let DREA serenade you with soulful melodies and heartfelt lyrics, creating an unforgettable musical experience."
  },
  {
    "title": "Hajikami + Yomogi",
    "type": "performer",
    "tags": ["musician", "performance"],
    "desc": "Immerse yourself in the dynamic performances of Hajikami + Yomogi, where traditional and modern music collide in a symphony of sounds."
  },
  {
    "title": "Parlous",
    "type": "performer",
    "tags": ["musician"],
    "desc": "Get ready to rock out with Parlous as they deliver electrifying performances that will leave you wanting more."
  },
  {
    "title": "Mando",
    "type": "performer",
    "tags": ["musician"],
    "desc": "Experience the magic of Mando's music, where catchy tunes and heartfelt lyrics come together to create an unforgettable auditory experience."
  },
  {
    "title": "Yenny Yuka",
    "type": "performer",
    "tags": ["musician"],
    "desc": "Let Yenny Yuka serenade you with her soulful voice and heartfelt lyrics, transporting you to a world of emotion and melody."
  },
  {
    "title": "Lil Waterboi",
    "type": "performer",
    "tags": ["musician"],
    "desc": "Get ready to groove with Lil Waterboi as he brings you infectious beats and catchy tunes that will keep you dancing all night long."
  },
  {
    "title": "Arthur Murray Dance Schools and association",
    "type": "performer",
    "tags": ["dance", "school"],
    "desc": "Learn the art of dance from the experts at Arthur Murray Dance Schools, where passion and skill come together to create beautiful performances."
  },
  {
    "title": "Association de vietnamien de montreal",
    "type": "performer",
    "tags": ["martial", "arts", "instructor"],
    "desc": "Experience the discipline and grace of martial arts with Sa Long Cuong, where tradition meets modernity in a display of skill and mastery."
  }
]



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
      <section className='container mx-auto py-6 bg-[#FFB623] text-[#982900] space-y-8'>
        <div className="flex justify-center space-x-4">
          <Restaurant></Restaurant>
          <h1 className="text-4xl font-bold">RESTAURANTS</h1>
        </div>
        <div className="text-2xl text-center">
          Savourez l'authenticité de la cuisine vietnamienne à travers notre sélection de restaurants participants
        </div>
        <div className="grid grid-cols-3 gap-2">
          {foodVendors.map((vendor,index)=>(
            <Participant key={index} title={vendor.title} desc={vendor.desc} tags={vendor.tags}></Participant>
          )
          )}
        </div>
      </section>
      <section className='container mx-auto py-6 bg-[#FFB623] text-[#982900] space-y-8'>
        <div className="flex justify-center space-x-4">
          <Restaurant></Restaurant>
          <h1 className="text-4xl font-bold">RESTAURANTS</h1>
        </div>
        <div className="text-2xl text-center">
          Savourez l'authenticité de la cuisine vietnamienne à travers notre sélection de restaurants participants
        </div>
        <div className="grid grid-cols-3 gap-2">
          {performers.map((vendor,index)=>(
            <Participant key={index} title={vendor.title} desc={vendor.desc} tags={vendor.tags}></Participant>
          )
          )}
        </div>
      </section>
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
