import Link from "next/link";

export default function Header() {
    return (
      <header className="fixed top-0 w-full text-slate-100 z-50">
        
<div className="navbar bg-sky-950 h-18" >
  <button className="btn btn-ghost text-xl font-bold"><a href="https://github.com/Marseille93/mon-repo-developpement">Melentaan</a></button>
  <div className="flex w-full justify-center text-lg font-bold">
    <div className="">
        <Link href="../../" className="mr-9">Accueil</Link>
        <Link href="../../NosProduits" className="mr-9">Nos Produits</Link>
        <Link href="../../Contacts" className="mr-9">Contacts</Link>
    </div>
  </div>
  
  
</div>
      
      </header>
    );
  }