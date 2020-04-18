import React, { useState } from 'react';
import { Consumer } from './Context/themeContext';

const Page = () => {    

    const [inputValue, updateInputValue] = useState("");
    const [inputArray, updateInputArray] = useState([]);

    // const query = "";
    // const giphyApi = `http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`;

    // componentDidMount() {
    //     fetch('https://api.mydomain.com')
    //       .then(response => response.json())
    //       .then(data => this.setState({ data }));
    //   }

    return(
    <React.Fragment>
        <Consumer>{ ({ 
            themeArray,
            currentTheme,
            actions }) => {

            const handleChange = (event) => {
                updateInputValue(event.target.value);
            }

            const removeButton = (item) => {
                updateInputArray(inputArray.filter(a => a !== item));
            }

            const handleSubmit = (event) => {
                event.preventDefault();
                if (inputValue) {
                    inputArray.push(inputValue);
                }
                updateInputValue("");
            }
            
            const indexOfCurrentTheme = themeArray.themeArray.findIndex(x => x.name === currentTheme);

            return(
                <React.Fragment>
                <div 
                style={
                    {
                        color: themeArray.themeArray[indexOfCurrentTheme].color,
                        background: themeArray.themeArray[indexOfCurrentTheme].background
                    }
                    }
                    >
                    <h1>Welcome</h1>
                    <h2>{inputValue}</h2>
                    <h2>{currentTheme}</h2>

                    {themeArray.themeArray.map( (theme) => 
                        <button key={themeArray.themeArray.indexOf(theme)} onClick={actions.updateCurrentTheme} value={theme.name}>{theme.name}</button>
                    )}
                    
                    {inputArray.map( (item) =>
                        <button key={inputArray.indexOf(item)}>{item}<span onClick={() => removeButton(item)}> x</span></button>
                    )}

                    <form onSubmit={handleSubmit}>
                        <input type="text" value={inputValue} onChange={handleChange}></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                </React.Fragment>
            )
        }}
        </Consumer>
    </React.Fragment>
    )
}

export default Page;