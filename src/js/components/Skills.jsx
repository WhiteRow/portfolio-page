import React from 'react'

export default function Skills({ title, skills }) {
    return (
        <div className="about-me__skills">
        <h2 className="title_tiny">{ title }</h2>

            <ul className="about-me__skills__list">
                {
                    skills.map((skill,index) => (
                        <li key={`${skill.name}_${index}`} style={{ backgroundColor: skill.color }} className="about-me__skills__item">{ skill.name }</li>
                    ))
                }
            </ul>
        </div>
    )
}
