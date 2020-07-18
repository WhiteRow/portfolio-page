import React from 'react'

import '../../scss/pages/myProjects.scss';

import ProjectCard from '../components/ProjectCard';

import craftedImage from '../../assets/images/crafted-project-image.png';
import huaweiImage from '../../assets/images/huawei-project-image.png';

export default function MyProjects() {
    const projects = [
        { name: 'Crafted project', stack: 'js, lodash, html, sass, webpack', link: 'heh', repo: 'hah', image: craftedImage, color: '#59B3F9' },
        { name: 'Huawei project', stack: 's, html, scss, webpack, modx', link: 'heh', repo: 'hah', image: huaweiImage, color: '#E85454' }
    ]

    return (
        <section className="section my-projects">
            <h1 className="title_large">Мои проекты</h1>
            <p className="subtitle">Проекты над которыми я работал, и в которых принимал участие</p>

            <div className="my-projects__list">
                { projects.map(project => <ProjectCard projectInfo={project} /> )}
            </div>
        </section>
    )
}
