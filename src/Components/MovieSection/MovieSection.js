import React, {useEffect, useState} from 'react';
import PopularTitle from '../Home/PopularTitle/PopularTitle';
import MovieCard from '../MovieCard/MovieCard';
import SiteLayout from '../SiteLayout/SiteLayout';

const MovieSection = () => {
    
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        .then(res => res.json())
        .then(data => setMovieData(data.entries))
    },[])

    return (
        <SiteLayout>
        <PopularTitle title='Movies'></PopularTitle>
            <div className="container d-flex flex-wrap">
                {
                    movieData.map(movie => movie.programType === "movie" ? <MovieCard movie={movie}></MovieCard> : "")
                }
            </div>
        </SiteLayout>
    );
};

export default MovieSection;