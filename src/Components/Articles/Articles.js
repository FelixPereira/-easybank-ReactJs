import React, { Component } from 'react';
import Article from './Article';
//import '.../Style.css';
import './assets/Articles.css';


class articles extends Component {
    state = {
        articles: [
            { 
                id: 1,
                src: './assets/images/image-currency.jpg', 
                alt: 'Currency',
                author: 'By Claire Robinson',
                title: 'Receive money in any currency with no fees',
                excert: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …' 
            },
    
            { 
                id: 2,
                src: './assets/images/image-restaurant.jpg', 
                alt: 'Restaurant',
                author: 'By Wilson Hutton',
                title: 'Treat yourself without worrying about money',
                excert: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …' 
            },
    
            { 
                id: 3,
                src: './assets/images/image-plane.jpg', 
                alt: 'Plane',
                author: 'By Wilson Hutton',
                title: 'Take your Easybank card wherever you go',
                excert: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …' 
            },
    
            { 
                id: 4,
                src: './assets/images/image-confetti.jpg', 
                alt: 'Confetti',
                author: 'By Claire Robinson',
                title: 'Our invite-only Beta accounts are now live!',
                excert: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...' 
            }
        ]
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