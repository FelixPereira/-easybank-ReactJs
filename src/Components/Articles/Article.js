import React from 'react';

const article = (props) => {
    return(
        <article className='articles__item'>
            <img src={props.article.src} alt={props.article.alt} />
            <div className='articles__content'>
                <small className='articles__author'> {props.article.author} </small>
                <h3 className='articles__title'> {props.article.title} </h3>
                <p className='articles__paragraph'> {props.article.excert} </p>
            </div>
        </article>
    )
}

export default article;