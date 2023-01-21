import React from 'react';
import '../static/style.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'

const Page2 = () => {
    return (
        <div>
            <Header/>
            <MainContent  pageName="Page2 Page" designer="Muhammad Abraham"/>
            <Footer/>

        </div>
    );
}

export default Page2;
