import React from 'react';
import { Consumer } from './Context/themeContext';

const Page = () => {    
    return(
        <React.Fragment>
            <Consumer>{ ({ 
                theme,
                currentTheme,
                actions }) => {

                const { defaultTheme, darkTheme, yellowTheme } = theme.themeObj;
              
                console.log(theme)
              

                console.log(theme.themeObj.darkTheme)

                return(
                    <React.Fragment>
                    <div style={
                        {
                            color: theme.themeObj[currentTheme].color,
                            background: theme.themeObj[currentTheme].background
                        }
                        }>
                        <h1>Welcome</h1>
                        <h2>{theme.currentTheme}</h2>
                        <button onClick={actions.updateCurrentTheme} value={defaultTheme.name}>{defaultTheme.name}</button>
                        <button onClick={actions.updateCurrentTheme} value={darkTheme.name}>{darkTheme.name}</button>
                        <button onClick={actions.updateCurrentTheme} value={yellowTheme.name}>{yellowTheme.name}</button>
                    </div>
                    </React.Fragment>
                )
            }}
            </Consumer>
        </React.Fragment>
    )
}

export default Page;


// const theme = currentTheme;
// color: state[currentTheme].color