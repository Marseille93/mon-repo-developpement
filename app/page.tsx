import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-slate-50 h-screen scr text-black">
<h1 className="text-center text-5xl">Data Fetching on Next.js 14</h1>
<p className="text-center text-2xl m-14">Sur Next.js 14 il existe différente façons de recupérrer des données</p>
<div className="flex justify-center">
<Link href="./datafetching" className="btn btn-primary ">Découvrir la recupération de données avec Nextjs 14</Link>
</div>



    </main>
  );
}
