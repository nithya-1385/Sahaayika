import React from "react";
import { Link } from "react-router-dom";
import "./pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1 className="title">Sahaayika Pricing</h1>

      {/* Free Plan */}
      <div className="pricing-card">
        <h2>Free Plan</h2>
        <p className="price">₹0</p>
        <p>Basic access to essential features.</p>
        <ul>
          <li>✔ AI chatbot for legal guidance</li>
          <li>✔ Basic incident logging</li>
          <li>✔ Awareness & educational resources</li>
        </ul>
        <Link to="/chat" className="btn primary">Get Started</Link>
      </div>

      {/* Individual Plan */}
      <div className="pricing-card">
        <h2>One-Time Subscription</h2>
        <p className="price">₹3,999</p>
        <p>Access legal experts, mental health counselors, and platform features.</p>
        <ul>
          <li>✔ Direct lawyer and counselor access</li>
          <li>✔ AI chatbot for guidance</li>
          <li>✔ Secure platform maintenance</li>
          <li>✔ Customer support & compliance</li>
          <li>✔ Future updates & features</li>
        </ul>
        <Link to="/chat" className="btn secondary">Subscribe Now</Link>
      </div>

      {/* Business Plans */}
      <div className="pricing-card">
        <h2>Business & Corporate Plans</h2>
        <p>Tailored solutions for organizations.</p>
        <ul>
          <li>💼 Up to 20 Employees - ₹24,999/year</li>
          <li>🏢 Up to 50 Employees - ₹59,999/year</li>
          <li>🏦 Up to 100 Employees - ₹1,09,999/year</li>
          <li>🚀 Up to 200 Employees - ₹1,99,999/year</li>
        </ul>
        <Link to="/contact" className="btn primary">Contact Sales</Link>
      </div>
    </div>
  );
};

export default Pricing;
