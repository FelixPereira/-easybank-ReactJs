import React, { Component } from 'react';
import Article from './Article';
//import '.../Style.css';
import './assets/Articles.css';


class articles extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/articles')
        .then(response => response.json())
        .then(data => this.setState({articles: data}))
    }

    render() {
        return(
            <section className="articles" id="articles">
                <h2 className="articles__title">Latest Articles</h2>
                <div className="articles__innerSection">
                    {
                        this.state.articles.map(article => (
                            <article className='articles__item' key={article.id}>
                                <img src='' alt={article.alt} />
                                <div className='articles__content'>
                                    <small className='articles__author'> {article.author} </small>
                                    <h3 className='articles__title'> {article.title} </h3>
                                    <p className='articles__paragraph'> {article.excert} </p>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </section>
        )
    }
}

export default articles;