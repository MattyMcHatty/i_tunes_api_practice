import React, { useState, useEffect } from 'react';
import TopTwentyList from '../components/TopTwentyList';


const TopTwentyContainer= () => {

    const [topTwenty, setTopTwenty] = useState([]);

    useEffect(() => {
        getTopTwenty();
    }, [])

    const getTopTwenty = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(topTwenty => setTopTwenty(topTwenty.feed.entry))
    }
    console.log(topTwenty)


    return(
        <div>
            <TopTwentyList topTwenty={topTwenty}/>


        </div>
    )
}

export default TopTwentyContainer;