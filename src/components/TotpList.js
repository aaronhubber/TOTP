import React from "react";

const TotpList=({songs})=>{

    const songItems = songs.map((song, index) => {
        return (<ul key={index}>
        <li>Number: {index +1} ---- {song["im:artist"].label}--- {song["im:name"].label}</li>
        <li key={index}><img id="totp-img" src={song["im:image"]}/></li>
        
        </ul>)
    })

    return(
        <div>
        <ul>
            {songItems}
        </ul>
        </div>
    )
}

export default TotpList;


