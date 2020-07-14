import React from 'react'

import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './components/Routes';


export default function App() {
    const socialMedias = [
        {
            id: 1,
            name: 'linkedin',
            link: ''
        },
        {
            id: 2,
            name: 'telegram',
            link: ''
        },
        {
            id: 3,
            name: 'github',
            link: ''
        },
    ];

    const menuLinks = [
        {
            id: 1,
            name: 'Обо мне',
            link: '/'
        },
        {
            id: 2,
            name: 'Мои проекты',
            link: '/myprojects'
        }
    ]

    return (
        <div className="container">
            <Header  socialMedias = { socialMedias } menuLinks = {menuLinks} />
            <Routes />
            <Footer />
        </div>
    )
}
