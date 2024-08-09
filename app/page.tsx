import Link from "next/link";
import Header from "./components/header/page";
export default function Home() {
  return (
    <main className="bg-slate-50 h-screen scr">
      
    <Header></Header>
      <div className="hero h-lvh "
  style={{
    backgroundImage: "url(https://www.om.fr/sites/default/files/2024-06/UNE%20PRIO%20ABO%202425.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-slate-100">MARSEILLAIS</h1>
      <p className="mb-5 text-slate-100">
        Ici le site de vente de maillot de l OM basé au SENEGAL <br />
        A JAMAIS LES PREMIERS
      </p>
      <button className="btn btn-primary"><Link href="./NosProduits">Voir Nos Produits</Link></button>
    </div>
  </div>
</div>

    </main>
  );
}
