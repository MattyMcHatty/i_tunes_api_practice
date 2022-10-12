import React from "react"

const TopTwentyListItem = ({topTwenty, position}) => {

    return <li><img src={topTwenty['im:image'][0].label} alt=""></img>
            {position}. {topTwenty['im:name'].label} by {topTwenty['im:artist'].label}

            <audio controls>
                <source src={topTwenty.link[1].attributes.href} type={topTwenty.link[1].attributes.type} />
                    Your browser does not support the audio element.
                </audio>
            
        
            </li>
            
}

export default TopTwentyListItem;