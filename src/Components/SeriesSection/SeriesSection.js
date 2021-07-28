import React, {useEffect, useState} from 'react';
import PopularTitle from '../Home/PopularTitle/PopularTitle';
import SeriesCard from '../SeriesCard/SeriesCard';
import SiteLayout from '../SiteLayout/SiteLayout';
import ReactPaginate from 'react-paginate';
import './SeriesSection.css';

const SeriesSection = () => {

    const [seriesData, setSeriesData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const seriesPerPage = 21
    const pagesVisited = pageNumber * seriesPerPage

    const displaySeries = seriesData.slice(pagesVisited, pagesVisited + seriesPerPage).map(series => series.programType === "series" ? <SeriesCard series={series}></SeriesCard> : "")

    const pageCount = Math.ceil(seriesData.length / seriesPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        .then(res => res.json())
        .then(data => setSeriesData(data.entries.filter(series => series.programType === "series" && series.releaseYear >= 2010).sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))))
    },[])

    console.log(seriesData)

    return (
        <SiteLayout>
            <PopularTitle title='Series'></PopularTitle>
            <div className="container d-flex flex-wrap">
                {displaySeries}
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

export default SeriesSection;