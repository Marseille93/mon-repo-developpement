
async function getData() {
    const res = await fetch('https://66b8d9653ce57325ac784de3.mockapi.io/api/V1/maillots')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Page() {
    const data = await getData()
   
    return(
        <main>
          <div className="flex justify-center">
    {data.map(maillot=>(
      
        <div key={maillot.id} className="m-7">
          <h4>{maillot.title}</h4>
          <p>{maillot.description}</p>
        </div>
      
    ))}
    </div>
    </main>
    ); 
    
  }