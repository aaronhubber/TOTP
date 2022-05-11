import React from "react";

const TotpList=({songs})=>{

    const songItems = songs.map((song, index) => {
        return (<ul class="container" key={index}>
        <li>Number: {index +1} ---- {song["im:artist"].label}--- {song["im:name"].label}</li>
        <li key={index}><img id="totp-img" src={song["im:image"][0].label}/></li>
        
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


