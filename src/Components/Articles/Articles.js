import Article from './Article';
import '../../App';
//import '.../Style.css';
import './assets/Articles.css';


const articles = props => {
    return(
        <section className="articles" id="articles">
            <h2 className="articles__title">Latest Articles</h2>
            <div className="articles__innerSection">
                {
                    props.articles.map(article => (
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

export default articles;