import React, {useState, useEffect} from "react";
import TotpList from "../components/TotpList";


const TotpContainer=()=>{

    const [songs, setSongs] = useState([]);


    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
        .catch(err => console.err);
    }



    return(
        <>
            <h2>Here is your Top Of the Pops To 20!!</h2>
            <TotpList songs={songs} />
        </>
    )
}

export default TotpContainer;