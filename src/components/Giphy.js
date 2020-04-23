import React, { useState, useEffect } from 'react';


const Giphy = (props) => {
    const [gifs, setGifs] = useState([]);
    const [errors, setErrors] = useState([]); 
    const [giphyInputValue, updateGiphyInputValue] = useState("");
    
    const giphyApi = `http://api.giphy.com/v1/gifs/search?q=${giphyInputValue}&limit=24&api_key=dc6zaTOxFJmzC`;

    const handleGiphyChange = (event) => {
        updateGiphyInputValue(event.target.value);
    }

        async function fetchData() {
            const res = await fetch(giphyApi);
            res.json()
            .then(res => setGifs(res))                
            .catch(err => setErrors(err))
        }

        function HandleGiphySubmit() {
            // query = giphyInputValue;
            useEffect(() => {
                fetchData()
              }, [])        
        }

        let gifsData;
        if(gifs.length) {
            console.log("gifs: ", gifs)
            gifsData = gifs.map( item => 
            <li key={item.id}>
                <image src={item.images.fixed_height.url} />
            </li>
            )
        } else {
            gifsData = 'no gifs here';
        }

        return  (
            <React.Fragment>
            <h2>{giphyInputValue}</h2>
            <div>{gifs}</div>

            
            <form onSubmit={HandleGiphySubmit}>
                <input onChange={handleGiphyChange}></input>
                <button type="submit">SubmitGiphy</button>
            </form>

            <ul>
            {gifsData}
            </ul>
        </React.Fragment>
    )
}

export default Giphy;


