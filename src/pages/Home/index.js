import React from 'react';
import Header from './components/Header'
import './stilo.css';

function Home () {
    return(
        <div>
            <Header/>
            <main className="main">
                <div className="navbar">
                    NavBar
                </div>
                <div className="feed">
                    feed
                </div>
            </main>
        </div>
    );
}

export default Home;