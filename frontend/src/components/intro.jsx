import { Link } from "react-router-dom";
import "./intro.css"; // Import CSS for this page

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1>Welcome to <span className="highlight">Sahaayika</span></h1>
        <p>
          An AI-driven chatbot empowering women with legal aid, harassment reporting, 
          and emergency support.
        </p>

        <div className="features">
          <div className="feature-box">
            <h2>🔍 Legal Guidance</h2>
            <p>Know your rights and seek legal aid.</p>
          </div>
          <div className="feature-box">
            <h2>🆘 Emergency Support</h2>
            <p>Send SOS alerts and get immediate help.</p>
          </div>
          <div className="feature-box">
            <h2>🤖 AI Chatbot</h2>
            <p>24/7 Assistance in multiple languages.</p>
          </div>
        </div>

        <div className="cta-buttons">
          <Link to="/pricing" className="btn primary">Start Chat</Link> 
          <Link to="/about" className="btn secondary">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
