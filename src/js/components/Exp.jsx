import React from 'react'
import Skills from './Skills'

export default function Exp( {title, subtitle, Expirience } ) {
    
    return (
        <div className="about-me__experience">
    
            <h2 className="title_tiny"> { title } </h2>
            <p className="about-me__experience__text"> { subtitle } </p>

            { 
                Expirience.map((work,index) => (
                    <div key={`${work.company}_${index}`} className="about-me__experience__item">
                        <h3 className="title_tiny about-me__experience__title">{ work.position }</h3>
                        { 
                            work.link ? <a href={work.link} tabIndex="0" target="_blank" className="about-me__experience__text underline">{ work.company }</a> : 
                            <p className="about-me__experience__text">{ work.company }</p> 
                        }
                        <p className="about-me__experience__text">{ work.time }</p>
                    </div>
                ))
            }
        </div>
    )
}
