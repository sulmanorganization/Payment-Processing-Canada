import React from 'react';
import { Link } from 'react-router-dom';

class Descriptions extends React.Component {
  render() {
  	return (
          <section className="section section-lg bg-web-desc">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="text-white">Built by entrepreneurs, for entrepreneurs</h2>
                        <p className="padding-t-15 home-desc">Payment Processing Canada is the first-ever community of payment experts. As a network created to better serve each and every one of our partners, we deliver the best payment assistance and support in the industry. How? We focus on what matters: responsiveness, flexibility, attentiveness, and accountability. With these principles as our foundation, we are pioneering a brand-new partnership experience..</p>
                        <Link to="JavaScript:Void(0);" className="btn btn-bg-white margin-t-30 waves-effect waves-light mb-5">View Plan & Pricing</Link>
                    </div>
                </div>
            </div>
            <div className="bg-pattern-effect">
                <img src="images/bg-pattern.png" alt="" />
            </div>
        </section>
  	);
  }
}
export default Descriptions;
