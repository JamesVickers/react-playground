import React, { Component } from 'react';

const ThemeContext = React.createContext();

const themeArray = [
    {
    name: 'defaultTheme',
    background: 'hsl(60, 23%, 95%)',
    color: 'hsl(0, 0%, 5%)'
    },
    {
    name: 'darkTheme',
    background: 'hsl(0, 0%, 5%)',
    color: 'hsl(60, 23%, 95%)'
    },     
    {
    name: 'yellowTheme',
    background: 'hsl(47, 100%, 53%)',
    color: 'hsl(60, 23%, 95%)'
    }
];

export class Provider extends Component {
    state = {
        currentTheme: 'defaultTheme'
        }

    updateCurrentTheme = (e) => {  
        const themeBtnName = e.target.value;
        this.setState(() => ({
            currentTheme: themeBtnName
        }))
    } 
      
    render() {
        return(
            <ThemeContext.Provider 
            value={{
                themeArray: {themeArray},
                currentTheme: this.state.currentTheme,
                actions: {
                    updateCurrentTheme: this.updateCurrentTheme
                }
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export const Consumer = ThemeContext.Consumer;

// export const Provider = () => {

//     const [currentTheme, setCurrentTheme] = useState('defaultTheme');

//     const defaultTheme = {
//         name: 'defaultTheme',
//         background: 'hsl(60, 23%, 95%)',
//         color: 'hsl(0, 0%, 5%)'
//     };
//     const darkTheme =   {
//         name: 'darkTheme',
//         background: 'hsl(0, 0%, 5%)',
//         color: 'hsl(60, 23%, 95%)'
//     };

//     const updateThemeName = (e) => {
//         const themeName = e.target.value;
//         setCurrentTheme(themeName);
//     }

//         return(
//         <ThemeContext.Provider 
//         value={{
//             defaultTheme: defaultTheme,
//             darkTheme: darkTheme,
//             currentTheme: {currentTheme},
//             actions: {
//                 updateThemeName: updateThemeName
//             }
//         }}>
//             {this.props.children}
//         </ThemeContext.Provider>
//     )  
// }