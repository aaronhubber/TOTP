import React, {useState, useEffect} from "react";
import TotpList from "../components/TotpList";


const TotpContainer=()=>{

    const [songs, setSongs] = useState([]);
    const [images, setImages] =useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    useEffect(() => {
        getImage();
    }, [])


    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
        .catch(err => console.err);
    }

    const getImage = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(images => setImages(images.feed.entry["im:image"]))
        .catch(err => console.err);
    }


    return(
        <>
            <h2>Party</h2>
             <TotpList songs={songs} />
        </>
    )
}

export default TotpContainer;