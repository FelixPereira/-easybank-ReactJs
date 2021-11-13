import React, { Component } from 'react';

import ARTICLES_DB from './articles__db';
import Hero from './components/hero/Hero';
import WhyChoose from './components/whyChoose/WhyChoose';
import Articles from './components/articles/Articles';
import Footer from './components/footer/Footer';

class App extends Component {
    state = {
        articles: ARTICLES_DB
    }

    render() {
        return(
            <main>
                <Hero />
                <WhyChoose />
                <Articles articles={this.state.articles} />
                <Footer />
            </main>
        )
    }
}

export default App;