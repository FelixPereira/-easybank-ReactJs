import React from 'react';
import './hero.css';

const hero = () => {
    return(
        <section className="hero" id="hero">
            <div className="hero__img">
                <img src='images/bg-intro-mobile.svg' alt='bg-intro-mobile' />
            </div>
            <div className="hero__text">
                <h2 className="hero__title">Next generation digital banking</h2>
                <p className="hero__paragraph paragraph">  Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <a className="hero__btn btn" href="#">  Request Invite</a>
            </div>
        </section>
    )
}

export default hero;