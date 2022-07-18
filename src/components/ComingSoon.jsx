import { useEffect, useState } from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const ComingSoon = () => {
    const [comingSoon, setComingSoon] = useState([])

    useEffect(() => {getComingSoon()}, [])


    const getComingSoon = async () => {


            const api = await fetch(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
                )
            const data = await api.json()

            console.log(data.results)
            setComingSoon(data.results)
    }
  return (
    <div>
            <div className="wrapper">
                <h3>Coming Soon</h3>
                
                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem',
                }}>
                {comingSoon.map((movie) => {
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

export default ComingSoon