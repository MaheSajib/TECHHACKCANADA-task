import React, { useEffect, useState } from 'react';
import PopularTitle from '../Home/PopularTitle/PopularTitle';
import MovieCard from '../MovieCard/MovieCard';
import SiteLayout from '../SiteLayout/SiteLayout';
import ReactPaginate from 'react-paginate';
import './MovieSection.css'

const MovieSection = () => {

    const [movieData, setMovieData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const moviePerPage = 21
    const pagesVisited = pageNumber * moviePerPage

    console.log(pagesVisited);

    const displayMovies = movieData.slice(pagesVisited, pagesVisited + moviePerPage).map(movie => movie.programType === "movie" ? <MovieCard movie={movie}></MovieCard> : "")

    console.log(displayMovies)

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
            .then(res => res.json())
            .then(data => setMovieData(data.entries.filter(movie => movie.programType === "movie" && movie.releaseYear >= 2010).sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))))
    }, [])


    const pageCount = Math.ceil(movieData.length / moviePerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <SiteLayout>
            <PopularTitle title='Movies'></PopularTitle>
            <div className="container d-flex flex-wrap">
                {displayMovies}
            </div>
            <div className="m-5">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBtn"}
                    previousLinkClassName={"previousBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </SiteLayout>
    );
};

export default MovieSection;