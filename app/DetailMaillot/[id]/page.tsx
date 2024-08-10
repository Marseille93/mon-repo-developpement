"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Header from "@/app/components/header/page";
import Products from "@/app/components/Products/page";

const articles = [
  {
    id: 1,
    title: "Domicile 24/25",
    description: "Maillot Domicile Saison 2024/2025",
    price: 15000,
    image: [
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-domicile-24-25-homme-0_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-domicile-24-25-homme-1_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-domicile-24-25-homme-2_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-domicile-24-25-homme-3_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-domicile-24-25-homme-4_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-domicile-24-25-homme-5_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-domicile-24-25-homme-7_2.jpg"
    ],
    detail:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam non, distinctio tempore quos nam dignissimos maiores vero dicta. Corporis molestias, sunt pariatur mollitia impedit neque vero amet tempora magni!'
  },
  {
    id: 2,
    title: "Extérieur 24/25",
    description: "Maillot Extérieur Saison 2024/2025",
    price: 15000,
    image: [
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-exterieur-24-25-homme-0_8.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-exterieur-24-25-homme-1_3.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-exterieur-24-25-homme-2_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-exterieur-24-25-homme-3_6.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-exterieur-24-25-homme-4_6.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-exterieur-24-25-homme-5_6.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-exterieur-24-25-homme-6_6.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-exterieur-24-25-homme-8_2.png"
    ],
    detail:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam non, distinctio tempore quos nam dignissimos maiores vero dicta. Corporis molestias, sunt pariatur mollitia impedit neque vero amet tempora magni!'
  },
  {
    id: 3,
    title: "Third 24/25",
    description: "Maillot Third Saision 2024/2025",
    price: 15000,
    image: [
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-third-24-25-homme-0_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-third-24-25-1_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-third-24-25-5_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-third-24-25-homme-3_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-third-24-25-homme-4_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-third-24-25-homme-5_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-third-24-25-homme-6_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-third-24-25-homme-8_4.jpg"
    ],
    detail:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam non, distinctio tempore quos nam dignissimos maiores vero dicta. Corporis molestias, sunt pariatur mollitia impedit neque vero amet tempora magni!'
  },
  {
    id: 4,
    title: "Gardien 24/25",
    description: "Maillot Gardien Saison 2024/2025",
    price: 10000,
    image: [
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-gardien-24-25-sable-0_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-gardien-24-25-sable-1_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-gardien-24-25-sable-2_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-gardien-24-25-sable-3_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-gardien-24-25-sable-4_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-gardien-24-25-sable-5_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-gardien-24-25-sable-6_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-gardien-24-25-sable-8_2.jpg"
    ],
    detail:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam non, distinctio tempore quos nam dignissimos maiores vero dicta. Corporis molestias, sunt pariatur mollitia impedit neque vero amet tempora magni!'
  },
  {
    id: 5,
    title: "Domicile 23/24",
    description: "Maillot Domicile 2023/2024",
    price: 8000,
    image: [
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/v/i/visuels_flocage_pastilles_2023_domicile_replica_homme.png",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-domicile-2023-2024-blanc-1_8.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-domicile-2023-2024-blanc-2_8.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-domicile-2023-2024-blanc-3_8.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-domicile-2023-2024-blanc-4_8.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-domicile-2023-2024-blanc-5_8.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-domicile-2023-2024-blanc-7_2.png"
    ],
    detail:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam non, distinctio tempore quos nam dignissimos maiores vero dicta. Corporis molestias, sunt pariatur mollitia impedit neque vero amet tempora magni!'
  },
  {
    id: 6,
    title: "Extérieur 23/24",
    description: "Maillot Extérieur Saison 2023/2024",
    price: 8000,
    image: [
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-exterieur-2023-2024-bleu-0_4.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-exterieur-2023-2024-bleu-1_6.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-exterieur-2023-2024-bleu-7_6.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-exterieur-2023-2024-bleu-3_6.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-exterieur-2023-2024-bleu-4_6.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-exterieur-2023-2024-bleu-5_6.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-exterieur-2023-2024-bleu-6_6.jpg",
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-exterieur-2023-2024-bleu-7_6.jpg"
    ],
    detail:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam non, distinctio tempore quos nam dignissimos maiores vero dicta. Corporis molestias, sunt pariatur mollitia impedit neque vero amet tempora magni!'
  },
];

type Props = {
  params: {
    id: number;
  };
};

export default function DetailMaillot({ params }: Props) {
  for (let index = 0; index < articles.length; index++) {
    if (params.id == articles[index].id) {
      return (
        <div className=" bg-white h-screen">
          <Header />
          <main className="flex items-center  w-full justify-start flex-col lg:flex-row lg:mt-16">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-1/2 mt-56   lg:w-2/6 lg:mt-8 lg:ml-20"
          >
            {articles[index].image.map((imgSrc) => (
              <SwiperSlide key={params.id} >
                <img className="w-full " src={imgSrc} alt={articles[index].title} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="ml-28 w-full lg:w-1/2">
          <h1 className="text-6xl font-bold text-sky-950">{articles[index].title}</h1>
          <p className="text-sky-950">{articles[index].description}</p>
          <p className="w-3/4">{articles[index].detail}</p>
          <button className="btn btn-primary mt-10">Commander</button>
          </div>
          </main>
          <main className="bg-white">
            <h3 className="text-center font-bold text-3xl text-black mb-40 underline">Autres Produits</h3>
            <div className="w-full flex justify-center">
            <div className=" w-3/4 ">
            <Products/>
            </div>
            </div>
            
            
          </main>
          
        </div>
      );
    }
  }

  return null; // Retourne null si aucun article ne correspond à l'ID
}
