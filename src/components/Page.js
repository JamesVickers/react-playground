import React, { useState } from 'react';
import { Consumer } from './Context/themeContext';
import Giphy from './Giphy';
import Counter from './Counter';

const Page = () => {    

    const [inputValue, updateInputValue] = useState("");
    const [inputArray, updateInputArray] = useState([]);
    const [counter, updateCounter] = useState(0);

    return(
    <React.Fragment>
        <Consumer>{ ({ 
            themeArray,
            currentTheme,
            actions }) => {

            const indexOfCurrentTheme = themeArray.themeArray.findIndex(x => x.name === currentTheme);

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

            const handleIncrement = () => {
                updateCounter(counter + 1);
            }

            const handleDecrement = () => {
                updateCounter(counter - 1);
            }
            

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
                        <button type="submit">SubmitThemeName</button>
                    </form>
                    <Giphy/>
                    <Counter count={counter} increment={handleIncrement} decrement={handleDecrement}/>
                </div>
                </React.Fragment>
            )
        }}
        </Consumer>
    </React.Fragment>
    )
}

export default Page;