import React from 'react'

import '../../scss/pages/myProjects.scss';

import ProjectCard from '../components/ProjectCard';
import Head from '../components/Head';

import craftedImage from '../../assets/images/crafted-project-image.png';
import huaweiImage from '../../assets/images/huawei-project-image.png';
import idealImage from '../../assets/images/ideal-project-image.png';
import primewoodImage from '../../assets/images/primewood-project-image.png';
import fixserviceImage from '../../assets/images/fixservice-project-image.png';

export default function MyProjects() {
    const projects = [
        { name: 'Crafted project', stack: 'js, lodash, html, sass, webpack', link: '', repo: 'https://github.com/WhiteRow/crafter', image: craftedImage, color: '#59B3F9' },
        { name: 'Huawei project', stack: 'js, html, scss, webpack, modx', link: 'https://huawei-servis.center', repo: 'https://github.com/WhiteRow/commerce-huawei-service', image: huaweiImage, color: '#E85454' },
        { name: 'Ideal project', stack: 'js, html, scss, webpack', link: '', repo: 'https://github.com/WhiteRow/ideal-project', image: idealImage, color: '#185748' },
        { name: 'PrimeWood project', stack: 'js, jquery, html, scss, webpack, opencart', link: 'https://prime-wood.ru', repo: '', image: primewoodImage, color: '#71C73B' },
        { name: 'Fixservice project', stack: 'js, jquery, html, css, webpack, modx', link: 'https://fixservice24.ru', repo: '', image: fixserviceImage, color: '#1AB9EF' },
    ]

    return (
        <section className="section my-projects">
            <Head title='Egor Belousov - мои проекты' />
            <h1 className="title_large">Мои проекты</h1>
            <p className="subtitle">Проекты, над которыми я работал</p>

            <div className="my-projects__list">
                { projects.map(project => <ProjectCard key={ project.name } projectInfo={project} /> )}
            </div>
        </section>
    )
}
