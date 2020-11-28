import React from 'react';
import '../../App.css';
import MainSection from '../MainSection.jsx';
import Cards from '../Cards/Cards';
import Footer from '../Footer';

function Home() {
    return (
        <React.Fragment>
            <MainSection />
            <Cards />
            <Footer />
        </React.Fragment>
    );
}

export default Home;