import React from 'react';
import { Consumer } from './Context/themeContext';


const Header = () => {    
    return(
        <React.Fragment>
            <Consumer>{ ({ defaultTheme, darkTheme, currentTheme, actions }) => {

                const theme = (currentTheme === 'darkTheme') ? darkTheme : defaultTheme;

                return(
                    <React.Fragment>
                    <div style={
                        {
                            color: theme.color,
                            background: theme.background
                        }
                        }>
                        <h1>Welcome</h1>
                        <h2>{currentTheme}</h2>
                        <button onClick={actions.updateThemeName} value={defaultTheme.name}>{defaultTheme.name}</button>
                        <button onClick={actions.updateThemeName} value={darkTheme.name}>{darkTheme.name}</button>
                    </div>
                    </React.Fragment>
                )
            }}
            </Consumer>
        </React.Fragment>
    )
}

export default Header;