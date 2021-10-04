import React, { Component } from 'react';
import Hero from './Components/Hero/Hero';
import WhyChoose from './WhyChoose/WhyChoose';
import Articles from './Components/Articles/Articles';
import Footer from './Components/Footer/Footer';

class App extends Component {
    render() {
        return(
            <main>
                <Hero />
                <WhyChoose />
                <Articles />
                <Footer />
            </main>
        )
    }
}

export default App;