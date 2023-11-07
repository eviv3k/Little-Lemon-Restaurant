import React from 'react';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import { Link } from 'react-router-dom';

function ImagesReserve() {
    return (
        <div className="container">
            <div className="image-grid">
                <article className="image-card">
                    <img src={GreekSalad} alt="Special Menu"></img>
                </article>
                <article className="image-card">
                    <img src={Bruschetta} alt="Special Menu"></img>
                </article>
                <article className="image-card">
                    <img src={LemonDessert} alt="Special Menu"></img>
                </article>
            </div>
            <div className="text-align marign-bottom">
                <Link className="action-button" to="/confirmation">
                    Reserve a Table
                </Link>
            </div>
        </div>
    )
}
export default ImagesReserve;