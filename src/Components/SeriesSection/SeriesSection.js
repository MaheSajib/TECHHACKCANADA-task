import React, {useEffect, useState} from 'react';
import PopularTitle from '../Home/PopularTitle/PopularTitle';
import SeriesCard from '../SeriesCard/SeriesCard';
import SiteLayout from '../SiteLayout/SiteLayout';

const SeriesSection = () => {

    const [seriesData, setSeriesData] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        .then(res => res.json())
        .then(data => setSeriesData(data.entries))
    },[])

    return (
        <SiteLayout>
            <PopularTitle title='Series'></PopularTitle>
            <div className="container d-flex flex-wrap">
                {
                    seriesData.map(series => series.programType === "series" ? <SeriesCard series={series}></SeriesCard> : "")
                }
            </div>
        </SiteLayout>
    );
};

export default SeriesSection;