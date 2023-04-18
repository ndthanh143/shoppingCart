import React from 'react'
import './card.scss'
import images from '../../assets'
import shoesData from '../../data'
function Card({ children, title, totalPrice }) {
    const { shoes } = shoesData;

    return (
        <div className="card">
            <div className="heading-card">
                <span className="logo">
                    <img src={images.logo} alt="logo" />
                </span>
                <div className="sub-head">
                    <p className="title">{title}</p>
                    <span className="total-price">{totalPrice}</span>
                </div>
            </div>
            <div className="body-card">
                {children}
            </div>
        </div>
    )
}

export default Card
