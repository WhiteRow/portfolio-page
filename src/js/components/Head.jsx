import React from 'react';
import { Helmet } from 'react-helmet';

import avatar from '../../assets/images/about-me-image.png';

export default function Head({ title }) {
    return (
        <Helmet>
            <title>{ title }</title>
        </Helmet>
    )
}
