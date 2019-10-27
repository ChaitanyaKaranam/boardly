import React, { Component } from 'react';
import '../styles/Home.scss';
import Button from './styled/button';
import dashboard from '../images/svg/dashboard.svg'

class Home extends Component {
    render() {
        return (
            <div className="home__wrapper">
                <div className="content__wrapper">
                    <span>We help you create interactvie React</span>
                    <span className="red">dashboards</span>
                    <span className="grey sub-heading">Check our boards</span>
                    <Button name="GET STARTED"/>
                </div>
                <div className="img__wrapper">
                    <img src={dashboard}/>
                </div>
            </div>
        );
    }
}

export default Home;