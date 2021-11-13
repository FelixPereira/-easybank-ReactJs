import React from 'react';
import Article from './Article';
import './articles.css';


const articles = props => {
    return(
        <section className="articles" id="articles">
            <h2 className="articles__title">Latest Articles</h2>
            <div className="articles__innerSection">
                {
                    props.articles.map(article => (
                        <Article key={ article.id } article={ article } />
                    ))
                }
            </div>
        </section>
    )
}

export default articles;