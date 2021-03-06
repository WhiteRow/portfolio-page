import React from 'react';

import avatar from '../../assets/images/about-me-image.png';

import Exp from '../components/Exp';
import Skills from '../components/Skills';
import Head from '../components/Head';


export default function AboutMe () {
    const Expirience = [
        {
            position: 'Frontend developer',
            company: 'Freelance',
            time: 'март 2020 - сейчас',
            link: ''
        },
        {
            position: 'Frontend developer',
            company: 'Prime wood',
            time: 'Июль 2019 - февраль 2020',
            link: 'https://prime-wood.ru'
        },
        {
            position: 'Frontend developer',
            company: 'Адамант',
            time: 'Июль 2018 - август 2019'
        },
        {
            position: 'HTML верстальщик',
            company: 'ООО Бизнес Молодость',
            time: 'август 2017 - март 2018',
            link: 'https://molodost.bz'
        }
    ]

    const SkillList = [
        { name: 'Java script',color: '#EBCC60' },
        { name: 'Es6',color: '#EBCC60' },
        { name: 'React',color: '#69B9F3' },
        { name: 'Css',color: '#60A8EB' },
        { name: 'Sass',color: '#EB608A' },
        { name: 'Html',color: '#EF8169' },
        { name: 'Pug',color: '#BD7262' },
        { name: 'Webpack',color: '#9DCDF0' },
        { name: 'Figma',color: '#b78ad0' },
        { name: 'Photoshop',color: '#5a81ce' }
    ]

    return (
        <section className="section about-me">    
            <Head title='Egor Belousov - обо мне' />
            <div className="about-me__block">
                <h1 className="title_large">Обо мне</h1>
                <p className="subtitle">Меня зовут  Егор, я frontend разработчик</p>

                <div className="about-me__info">
                    <div className="about-me__info__item">
                        <span className="fi flaticon-graduate about-me__info__icon"></span>
                        <p className="about-me__info__text">МГУТУ им. К.Г. Разумовского , информационная безопасность</p>
                    </div>
                    <div className="about-me__info__item">
                        <span className="fi flaticon-pin about-me__info__icon"></span>
                        <p className="about-me__info__text">Москва, Россия</p>
                    </div>
                </div>

                <div className="box">

                    <Exp 
                        title = 'Опыт работы' 
                        subtitle = 'Компании, где я работал' 
                        Expirience = { Expirience } 
                    />

                    <Skills 
                        title = 'Навыки, которыми я владею'
                        skills = { SkillList }
                    />

                </div>
            </div>

            <div className="about-me__block">
                {
                    screen.width <= 800 
                        ? <a href={avatar} target="_blank"><img className="about-me__avatar" src={avatar} alt="avatar"/></a>
                        : <img className="about-me__avatar" src={avatar} alt="avatar"/>
                }
            </div>
        </section>
    )
}