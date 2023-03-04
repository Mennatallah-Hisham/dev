

async function  MovieDetail({params}){
const {movie} =params;
  console.log(params.movie);
      const imagePath = "https://image.tmdb.org/t/p/original/";

    const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`);
    const data = await response.json();
    
    return(
        <section>
           
            <div className="flex flex-col gap-3">
            <h2>{data.title}</h2>
              
                <p>run time : {data.runtime} minutes</p>
            <img className="w-m mx-auto" src={`${imagePath}${data.poster_path}`} alt={movie.title} />
            <p className=" bg-blue-600 w-fit px-3 py-1  rounded-md text-gray-300 mx-auto "> {data.status}</p>
              
              <p className="w-m md:w-lg mx-auto"> {data.overview}</p>
            </div>

        </section>
    )
}

export default MovieDetail;