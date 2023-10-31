import {Link} from 'react-router-dom';
export default function SpecialCard(props) {
    return (
        <article className="menu-card">
            <img src={props.image} alt="Special Menu"></img>
            <section className="menu-card-content">
                <div className="menu-card-title">
                    <h4>{props.name}</h4>
                    <p>{props.price}</p>
                </div>
                <p>{props.description}</p>
                <Link className="special-button"to="/order">Order for Delivery</Link>
            </section>
        </article>
    );
}