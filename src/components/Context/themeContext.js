import React, { Component } from 'react';

const ThemeContext = React.createContext();

export class Provider extends Component {

    state = {
        defaultTheme: {
            name: 'defaultTheme',
            background: 'hsl(60, 23%, 95%)',
            color: 'hsl(0, 0%, 5%)'
        },
        darkTheme: {
            name: 'darkTheme',
            background: 'hsl(0, 0%, 5%)',
            color: 'hsl(60, 23%, 95%)'
        },
        currentTheme: 'defaultTheme'
    }

    updateThemeName = (e) => {
        const themeName = e.target.value;
        this.setState(() => ({
            currentTheme: themeName
        }))
    }
    
    render() {
        
        return(
            <ThemeContext.Provider 
            value={{
                defaultTheme: this.state.defaultTheme,
                darkTheme: this.state.darkTheme,
                currentTheme: this.state.currentTheme,
                actions: {
                    updateThemeName: this.updateThemeName
                }
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export const Consumer = ThemeContext.Consumer;