import React from 'react';
import Footer from './Footer';
import Nav from './nav'; 
import '../styles/layout.css';

export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            { children }
            <Footer />
        </div>   
    );
}