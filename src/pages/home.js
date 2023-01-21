import React from 'react';
import '../static/style.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
import { Link, NavLink} from 'react-router-dom';


const Home = () => {
    return (
        <>
            <Header></Header>
                {/* Inner Link</> */}
                <Link to="/home"></Link>
                {/* Inner Links connected to each others active/and non-active</> */}
                <NavLink to="/home"></NavLink>
                {/* <a href="https://www.youtube.com/"></a> */}

                <MainContent  pageName="HOME Page" designer="Muhammad Abraham"/>
            <Footer/>
        </>
    );
}

export default Home;
