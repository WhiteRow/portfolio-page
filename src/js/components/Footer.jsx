import '../../scss/components/footer.scss';

import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <a href="tel:+79150721400" className="footer__item">
                <span className="fi flaticon-phone footer__icon"></span>
                <p className="footer__text">+7 915 072 14 00</p>
            </a>
            <a href="mailto:meekgot@gmail.com" className="footer__item">
                <span className="fi flaticon-email footer__icon"></span>
                <p className="footer__text">meekgot@gmail.com</p>
            </a>
        </footer>
    )
}
