import React, { useState, useEffect } from 'react';


let query = 'hello';
const giphyApi = `http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`;


const Giphy = (props) => {
    const [gifs, setGifs] = useState([]);
    const [errors, setErrors] = useState([]);

        async function fetchData() {
            const res = await fetch(giphyApi);
            res.json()
            .then(res => console.log(res))
                // setGifs(res))
            .catch(err => setErrors(err))
        }

        useEffect(() => {
            fetchData()
          }, [])        

        const handleGiphySubmit = () => {
            query = props.input;
        }

    return  (
        <React.Fragment>
            <h1>{query}</h1>
            {/* <p>{props.input}</p> */}
            <form onSubmit={handleGiphySubmit}>
                <input onChange={props.inputChange}></input>
            </form>
        </React.Fragment>
    )
}

export default Giphy;


