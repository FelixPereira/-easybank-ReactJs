import React from 'react';

const article = (props) => {
    return(
        <article className="articles__item">
            <img src={props.src} alt={props.alt} />
            <div className="articles__content">
                <small className="articles__author"> {props.author} </small>
                <h4 className="articles__title"> {props.title} </h4>
                <p className="articles__paragraph"> {props.excert} </p>
            </div>
        </article>
    )
}

export default article;