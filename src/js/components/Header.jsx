import '../../scss/components/header.scss';

import React from 'react';
import { Link } from 'react-router-dom'

export default function Header ({ socialMedias, menuLinks }) {
    const [activeItem, setActiveItem] = React.useState(0);

return (
        <header className="header">
            <div className="socials">
                { 
                    socialMedias.map(socialMedia => (
                        <a 
                            key={socialMedia.id}
                            href={socialMedia.link} 
                            tabIndex='0'
                            target='_blank'
                            className={`fi flaticon-${socialMedia.name} header__icon`}>
                        </a> 
                    )) 
                }
            </div>
            <nav className="menu">    
                { menuLinks.map((link, index) => (
                    <Link 
                        key={link.id}
                        to={link.link}
                        onClick = {() => setActiveItem(index) } 
                        className={ `menu__item underline ${ activeItem === index ? 'is-active' : '' }` } 
                    >
                        {link.name}
                    </Link>
                )) }
            </nav>
        </header>
    )
}