import React, { Component } from 'react'
import { connect } from 'react-redux';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './layout.css'

function mapStateToProps(state, ownProps) {
    return {
        data: state.data
    };
}

class Layout extends Component {

    componentDidMount() {
        fetch('https://randomuser.me/api/', {
            method: 'GET',
        }).then((response) =>  {
            return response.json();
        }).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="page-wrapper">
                <Header/>
                <div className="content-wrap">

                </div>
                <Footer/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Layout);
