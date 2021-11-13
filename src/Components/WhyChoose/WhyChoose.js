import React from 'react';
import WhyChooseItem from './WhyChooseItem';
import '../../Style.css';
import './whyChoose.css';

const whyChoose = () => {
    return(
        <section className="whyChoose" id="whyChoose">
            <h2 className="whyChoose__title">Why choose Easybank?</h2>
            <p className="whyChoose__paragraph paragraph">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            <div className="whyChoose__innerSection">
                <WhyChooseItem 
                    src='images/icon-online.svg' 
                    alt='Credit card'
                    title='Online Banking' 
                    paragraph='Our modern web and mobile applications allow you to keep track of your financeswherever you are in the world.' />

                <WhyChooseItem 
                    src='images/icon-budgeting.svg' 
                    alt='Budgeting'
                    title='Simple Budgeting' 
                    paragraph='See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.' />

                <WhyChooseItem 
                    src='images/icon-onboarding.svg' 
                    alt='Onboarding'
                    title='Fast Onboarding' 
                    paragraph='We don’t do branches. Open your account in minutes online and start taking control of your finances right away.' />

                <WhyChooseItem 
                    src='images/icon-api.svg' 
                    alt='Open API'
                    title='API' 
                    paragraph='Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.' />
            </div>
        </section>
    )
}

export default whyChoose;