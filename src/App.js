import React, { Component } from 'react';
import Hero from './components/hero/Hero';
import WhyChoose from './components/whyChoose/WhyChoose';
import Articles from './components/articles/Articles';
import Footer from './components/footer/Footer';

class App extends Component {
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