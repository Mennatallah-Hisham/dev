


import Movie from "./movie";

export default async function Home() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const data = await response.json();


  return (
    <main className>
      
    <h1 className="text-red-500">popular movies</h1>
    <div className="flex flex-row gap-10 flex-wrap container mx-auto">
    {data.results.map(movie=>{
  return(
  
    <Movie key={movie.id} movie={movie}/>
  )

})}
    </div>

    
    </main>
  )
}
