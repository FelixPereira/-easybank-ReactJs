import React, { Component } from 'react';
import Hero from './Components/Hero/Hero';
import WhyChoose from './Components/WhyChoose/WhyChoose';
import Articles from './Components/Articles/Articles';
import Footer from './Components/Footer/Footer';

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