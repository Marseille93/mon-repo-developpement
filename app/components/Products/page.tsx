"use client";

import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Domicile 24/25",
    description: "Maillot Domicile Saison 2024/2025",
    price: 15000,
    image:
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-domicile-24-25-homme-0_4.jpg",
  },
  {
    id: 2,
    title: "Extérieur 24/25",
    description: "Maillot Extérieur Saison 2024/2025",
    price: 15000,
    image:
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-exterieur-24-25-homme-0_8.jpg",
  },
  {
    id: 3,
    title: "Third 24/25",
    description: "Maillot Third Saision 2024/2025",
    price: 15000,
    image:
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-third-24-25-homme-0_4.jpg",
  },
  {
    id: 4,
    title: "Gardien 24/25",
    description: "Maillot Gardien Saison 2024/2025",
    price: 10000,
    image:
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-gardien-24-25-sable-0_4.jpg",
  },
  {
    id: 5,
    title: "Domicile 23/24",
    description: "Maillot Domicile 2023/2024",
    price: 8000,
    image:
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/v/i/visuels_flocage_pastilles_2023_domicile_replica_homme.png",
  },
  {
    id: 6,
    title: "Extérieur 23/24",
    description: "Maillot Extérieur Saison 2023/2024",
    price: 8000,
    image:
      "https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-exterieur-2023-2024-bleu-0_4.jpg",
  },
];
export default function Products() {
  return (
    <div className="flex justify-around flex-wrap">
      {articles.map((article) => (
        <div key={article.id} className="card bg-base-100 w-96 shadow-xl mb-20">
          <figure className="bg-white">
            <img src={article.image} alt="maillot" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{article.title}</h2>
            <p>{article.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link href={`../../DetailMaillot/${article.id}`}>
                  Voir Détail
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
