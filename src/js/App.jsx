import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './components/Routes';

import AboutMe from './pages/AboutMe';
import MyProjects from './pages/MyProjects';

export default function App() {
    const socialMedias = [
        { id: 1, name: 'linkedin', link: '' },
        { id: 2, name: 'telegram', link: '' },
        { id: 3, name: 'github', link: '' },
    ];

    const menuLinks = [
        { id: 1, name: 'Обо мне', link: '/' },
        { id: 2, name: 'Мои проекты', link: '/myprojects' }
    ]

    const routes = [
        { path: '/', Component: AboutMe },
        { path: '/myprojects', Component: MyProjects }
    ]

    const footerLinks = [
        { link: 'tel:+79150721400', icon: 'phone', text: '+7 915 072 14 00' },
        { link: 'mailto:meekgot@gmail.com', icon: 'email', text: 'meekgot@gmail.com' }
    ]

    return (
        <div className="container">
            <Header socialMedias = { socialMedias } menuLinks = {menuLinks} />
            <Routes routes = { routes } />
            <Footer footerLinks = { footerLinks } />
        </div>
    )
}
