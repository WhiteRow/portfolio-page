import React from 'react'

export default function ProjectCard({ projectInfo }) {
    return (
        <div className="my-projects__card">
            <div className="my-projects__card__info">
                <h2 className="my-projects__card__title">{ projectInfo.name }</h2>
                <div className="my-projects__card__stack">
                    <span className="my-projects__card__text">{ projectInfo.stack }</span>
                </div>
                <div className="my-projects__card__buttons">
                    { 
                        projectInfo.link ? 
                            <a 
                                href={ projectInfo.link } 
                                target="_blank"
                                style={{ backgroundColor: projectInfo.color }} 
                                className="my-projects__card__button project">
                                Проект
                            </a>
                        : ''
                    }
                    {
                        projectInfo.repo ? 
                            <a 
                                href={ projectInfo.repo } 
                                target="_blank"
                                className="my-projects__card__button repo">
                                Репозиторий
                            </a>
                        : ''
                    }
                    
                </div>
            </div>
            <figure className="my-projects__card__figure">
                <img src={ projectInfo.image } alt="" className="my-projects__card__image"/>
            </figure>
        </div>
    )
}
