import React from 'react';

class Services extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Our Services</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-diamond text-custom"></i>
                            <h4 className="padding-t-15">Payment Gateway</h4>
                            <p className="padding-t-15 text-muted">Payment Processing Canada's payment gateway allows you to reach customers on any device, at any time, from any location, so you can grow your business faster.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-display2 text-custom"></i>
                            <h4 className="padding-t-15">Security & Risk Management</h4>
                            <p className="padding-t-15 text-muted">Payment Processing Canada's Security & Risk Management service provides merchants with the highest level of card processing security available. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-piggy text-custom"></i>
                            <h4 className="padding-t-15">Recurring & Subscription Billing</h4>
                            <p className="padding-t-15 text-muted">Payment Processing Canada's automated recurring billing service makes it simple to manage recurring payments, subscription billing and other payment plans. Improve your clients’ purchase experience with greater payment flexibility while maximizing your revenue streams.</p>
                        </div>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-science text-custom"></i>
                            <h4 className="padding-t-15">Multi-Currency Pricing</h4>
                            <p className="padding-t-15 text-muted">Payment Processing Canada's Multi-Currency Pricing technology enables you to sell your products and services in over 100 foreign currencies and receive payment in your own currency. Reduce friction during checkout by providing your clients with a local shopping experience.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-news-paper text-custom"></i>
                            <h4 className="padding-t-15">Dynamic Currency Conversion</h4>
                            <p className="padding-t-15 text-muted">Payment Processing Canada's Dynamic Currency Conversion service provides international shoppers a better in-store shopping experience by giving them the convenience of paying in their local currency.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-plane text-custom"></i>
                            <h4 className="padding-t-15">Apple Pay & Google Pay</h4>
                            <p className="padding-t-15 text-muted">Payment Processing Canada's digital walletservice enable merchants to seamlessly accept Apple PayTM and Google PayTM online, in-app or at the point of sale – making it faster, simpler and more secure for customers to buy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default Services;
