import '../../scss/components/footer.scss';

import React from 'react'

function FooterLink ({ footerItem }) {
    return (
        <a href={ footerItem.link } className="footer__item">
            <span className={ `fi flaticon-${footerItem.icon} footer__icon `}></span>
            <p className="footer__text">{ footerItem.text }</p>
        </a>
    )
}

export default function Footer({ footerLinks }) {
    return (
        <footer className="footer">
            {
                footerLinks.map(link => (
                    <FooterLink key={ link.icon } footerItem = { link } />
                ))
            }
        </footer>
    )
}
