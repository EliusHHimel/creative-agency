import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import OurWorks from '../OurWorks/OurWorks';
import Partners from '../Partners/Partners';
import Services from '../Services/Services';

const Home = () => {
    const location = useLocation();
    let title = 'Creative Agency | Your Creative Solutions';
    if (location.pathname === '/') {
        title = 'Creative Agency | Your Creative Solutions';
    }


    useEffect(() => {
        document.title = title;
    }, [title])
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Partners></Partners>
            <Services></Services>
            <OurWorks></OurWorks>
            <ClientsFeedback></ClientsFeedback>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;