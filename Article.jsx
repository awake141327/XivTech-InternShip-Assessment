import React from 'react'

export default function Aricle(props) {
    return (
        <div className='article'>
            <div>
                <h1 className="title">{props.title}</h1>
                <h3 className="detail">{props.detail}</h3>
                <a className="link" href="#">{props.link} <span className="arrow">→</span></a>
            </div>
            <div>
                <img className="image" src={props.img} alt={props.alt} />
            </div>
        </div>
    )
}