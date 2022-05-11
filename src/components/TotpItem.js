import React from "react";


const TotpItem = ({song})=>{
    song= song.feed.entry[0]

    return(
        <li>{song}</li>
    )
}

export default TotpItem;

