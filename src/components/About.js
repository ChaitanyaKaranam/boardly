import React from 'react';
import Button from './styled/button';
import '../styles/About.scss';

export default () => {
    return(
        <div className="about__wrapper">
            <div className="about__content">
                <span>Open source React dashboard framework built on top of <span className="red">Chart.js</span></span>
                <span className="grey sub-heading">Interested in contributing? Check out our GitHub page</span>
                <a href="https://github.com/ChaitanyaKaranam/boardly" target="_blank" rel="noopener noreferrer">
                    <Button className="primary-button" name="START CONTRIBUTING"/>
                </a>
            </div>
        </div>
    )
}