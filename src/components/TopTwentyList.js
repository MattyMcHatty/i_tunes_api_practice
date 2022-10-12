import React from "react";
import TopTwentyListItem from "./TopTwentyListItem";

const TopTwentyList = ({topTwenty}) => {

    const topTwentyItems = topTwenty.map((topTwenty, index) => {
        return <TopTwentyListItem topTwenty={topTwenty} key={index} position={index + 1} />
    })

    return(
        <ul>
            {topTwentyItems}
        </ul>

    )
}

export default TopTwentyList;