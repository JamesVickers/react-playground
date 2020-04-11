import React, { Component } from 'react';

const MainContext = React.createContext();

export class Provider extends Component {

    state = {
        headerText: {title: 'I am a title', subTitle: 'I am a subTitle'}
    }

    render() {
        return(
            <MainContext.Provider value={{
                headerText: this.state.headerText,
                // actions: {
                //     toggleSubtitle: this.toggleSubtitle
                //     }
                }
                }>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

export const Consumer = MainContext.Consumer;