import React from 'react'

import '../../scss/pages/myProjects.scss';

import craftedImage from '../../assets/images/crafted-project-image.png';
import huaweiImage from '../../assets/images/huawei-project-image.png';

export default function MyProjects() {
    return (
        <section className="section my-projects">
            <h1 className="title_large">Мои проекты</h1>
            <p className="subtitle">Проекты над которыми я работал, и в которых принимал участие</p>

            <div className="my-projects__list">
                <div className="my-projects__card">
                    <div className="my-projects__card__info">
                        <h2 className="my-projects__card__title">Crafted website</h2>
                        <div className="my-projects__card__stack">
                            <span className="my-projects__card__text">js, lodash, html, sass, webpack</span>
                        </div>
                        <div className="my-projects__card__buttons">
                            <a href="" style={{ backgroundColor: '#59B3F9' }} className="my-projects__card__button project">Проект</a>
                            <a href="" className="my-projects__card__button repo">Репозиторий</a>
                        </div>
                    </div>
                    <figure className="my-projects__card__figure">
                        <img src={ craftedImage } alt="" className="my-projects__card__image"/>
                    </figure>
                </div>
                <div className="my-projects__card">
                    <div className="my-projects__card__info">
                        <h2 className="my-projects__card__title">Huawei website</h2>
                        <div className="my-projects__card__stack">
                            <span className="my-projects__card__text">js, html, scss, webpack, modx</span>
                        </div>
                        <div className="my-projects__card__buttons">
                            <a href="" style={{ backgroundColor: '#E85454' }} className="my-projects__card__button project">Проект</a>
                            <a href="" className="my-projects__card__button repo">Репозиторий</a>
                        </div>
                    </div>
                    <figure className="my-projects__card__figure">
                        <img src={ huaweiImage } alt="" className="my-projects__card__image"/>
                    </figure>
                </div>
            </div>
        </section>
    )
}
