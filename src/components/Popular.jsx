import { useEffect, useState } from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {getPopular()}, [])


    const getPopular = async () => {


            const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            const data = await api.json()

            console.log(data.results)
            setPopular(data.results)
        
       

    }
  return (
    <div>
            <div className="wrapper">
                <h3>Popular Picks</h3>
                
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem',
                }}>
                {popular.map((movie) => {
                    return(
                        <SplideSlide key={movie.id}>
                        <div className="card">
                            
                            <p>{movie.title}</p>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <div className="gradient"/>
                    
                        </div>
                        </SplideSlide>
                    )
                })}
                </Splide>
            </div>
            
    </div>
  )
}

export default Popular