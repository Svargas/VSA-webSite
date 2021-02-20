import React from 'react';
import { Link } from 'gatsby';
import Style from './nav.module.css';

export default function Nav() {
    return ( 
    <div>
        <div className={Style.wrap}>
            <div className={Style.logo}>
                <p>logo</p>
            </div>
            <nav>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/empresa">Empresa</Link></div>
                <div><Link to="/servicos">Serviço</Link></div>
                <div><Link to="/contato">Contato</Link></div>
            </nav> 
        </div>
    </div>
    );
}