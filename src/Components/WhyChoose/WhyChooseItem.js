import React from 'react';

const whyChooseItem = (props) => {
    return(
        <article className="whyChoose__item">
            <img src={props.src} alt={props.alt} />
            <h3> {props.title} </h3>
            <p className="paragraph"> {props.paragraph} </p>
        </article>
    )
}

export default whyChooseItem;