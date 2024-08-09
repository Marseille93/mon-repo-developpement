import Header from "../components/header/page";

export default function NosProduits() {
    return (
      <div className="bg-slate-50 h-screen overflow-auto">
        <Header></Header>
        <div className="min-h-screen ">
          <h1 className="text-center text-black mt-20">Nos Produits</h1>
          <div className="flex justify-around w-full flex-wrap p-2">
          <div className="flex w-3/4 flex-wrap justify-around  min-h-screen">
          <div className="card bg-base-100 w-96 shadow-xl mb-20">
                <figure>
                  <img src="https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-domicile-24-25-homme-0_4.jpg"alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Domicile 24/25</h2>
                  <p>Maillot Domicile Saison 2024/2025</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 w-96 shadow-xl mb-20">
                <figure>
                  <img src="https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-exterieur-24-25-homme-0_8.jpg"alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Extérieur 24/25</h2>
                  <p>Maillot Extérieur Saison 2024/2025</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>


              <div className="card bg-base-100 w-96 shadow-xl mb-20">
                <figure>
                  <img src="https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-third-24-25-homme-0_4.jpg"alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Third 24/25</h2>
                  <p>Maillot Third Saision 2024/2025</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>


              <div className="card bg-base-100 w-96 shadow-xl mb-20">
                <figure>
                  <img src="https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-om-gardien-24-25-sable-0_4.jpg"alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Gardien 24/25</h2>
                  <p>Maillot Gardien Saison 2024/2025 </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>


              <div className="card bg-base-100 w-96 shadow-xl mb-20">
                <figure className="bg-white">
                  <img src="https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/v/i/visuels_flocage_pastilles_2023_domicile_replica_homme.png"alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Domicile 23/24</h2>
                  <p>Maillot Domicile 2023/2024</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>


              <div className="card bg-base-100 w-96 shadow-xl mb-20">
                <figure>
                  <img src="https://boutique.om.fr/media/catalog/product/cache/c0bdcf366c539c427f05e11e3fbd132b/m/a/maillot-authentique-om-exterieur-2023-2024-bleu-0_4.jpg"alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Extérieur 23/24</h2>
                  <p>Maillot Extérieur Saison 2023/2024</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
          </div>
              

          </div>
          
        </div>
        
      </div>
    );
  }
  