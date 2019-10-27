import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/Home.scss';
import dashboard from '../images/svg/dashboard.svg'

class Home extends Component {
    render() {
        return (
            <div className="home__wrapper">
                <div className="content__wrapper">
                    <span>We help you create interactvie React</span>
                    <span className="red">dashboards</span>
                    <span className="grey sub-heading">Check our boards</span>
                    <button className="primary-button" onClick={() => {this.props.history.push('/boards')}}>GET STARTED</button>
                </div>
                <div className="img__wrapper">
                    <img src={dashboard} alt="create interactive dashboards"/>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);