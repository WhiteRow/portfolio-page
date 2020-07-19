import React from 'react'

import '../../scss/pages/myProjects.scss';

import ProjectCard from '../components/ProjectCard';

import craftedImage from '../../assets/images/crafted-project-image.png';
import huaweiImage from '../../assets/images/huawei-project-image.png';

export default function MyProjects() {
    const projects = [
        { name: 'Crafted project', stack: 'js, lodash, html, sass, webpack', link: '', repo: 'https://github.com/WhiteRow/crafter', image: craftedImage, color: '#59B3F9' },
        { name: 'Huawei project', stack: 's, html, scss, webpack, modx', link: 'https://huawei-servis.center/', repo: 'https://github.com/WhiteRow/commerce-huawei-service', image: huaweiImage, color: '#E85454' }
    ]

    return (
        <section className="section my-projects">
            <h1 className="title_large">Мои проекты</h1>
            <p className="subtitle">Проекты, над которыми я работал</p>

            <div className="my-projects__list">
                { projects.map(project => <ProjectCard key={ project.name } projectInfo={project} /> )}
            </div>
        </section>
    )
}
