import React from 'react'
import '../styles/Card.css'
import Accordion from "../components/accordeon"


function Card({title, imageUrl, body, className}) {
    return (
        <div className={className}>
            <div className='image-container'>
                <img src={imageUrl} alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{title}</h3>
                    <Accordion 
                title="Section 1"
                content={body}/>
                </div>
            </div>
        </div>
    )
}

export default Card
