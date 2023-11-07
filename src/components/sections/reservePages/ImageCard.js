function ImageCard(props) {
    return (
        <article className="menu-card">
            <section className="specials-carousel">
                <img src={props.image} alt="Special Menu"></img>
            </section>
        </article>
    );
}

export default ImageCard;