import React, { useState } from 'react';
import { Consumer } from './Context/mainContext';

const Header = () => {

    const [hasSubtitle, toggleHasSubtitle] = useState(true);

    const toggleSubtitle = () => {
            toggleHasSubtitle(!hasSubtitle)
        }

    return(
        <React.Fragment>
            <Consumer>{ ({headerText}) => {

            const subtitle = hasSubtitle? headerText.subTitle : 'I am not a subTitle';
            const buttonText = `${hasSubtitle? 'Remove' : 'Add'} subtitle`;

                return(
                    <React.Fragment>
                        <h1>{headerText.title}</h1>
                        <h2>{subtitle}</h2>
                        <h1>{headerText.hasSubtitle}</h1>
                        <button onClick={toggleSubtitle}>{buttonText}</button>
                    </React.Fragment>
                )
            }}
            </Consumer>
        </React.Fragment>
    )
}

export default Header;