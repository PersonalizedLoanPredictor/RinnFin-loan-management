import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css"
function LandingPage() {
    const navigate = useNavigate();
    return (
      <div className="Container">
          <div className="landing-container">
      <main>
        <h1>Welcome to RinnFin</h1>
        <p>Your AI-powered Loan Finacing advisory platform</p>
        <div className="button-container">
          <Link to="/login">
            <button className="landing-button">Bank Login</button>
          </Link>
          <Link to="/signup">
            <button className="landing-button">User Login</button>
          </Link>
        </div>
        <div class="main-content">
    
    <section class="hero-section">
      <div class="hero-content">
        <h1>Welcome to RinnFin</h1>
        <p>Empowering Your Financial Journey with AI.</p>
        <a href="/financial-literacy" class="cta-button">Get Started</a>
      </div>
      <div class="hero-image">
        <img src="path-to-hero-image.jpg" alt="Hero Image" />
      </div>
    </section>
  
    
    <section class="features-section">
      <h2>Why Choose Us?</h2>
      <div class="features-grid">
        <div class="feature">
          <img src="path-to-icon1.png" alt="Feature 1" />
          <h3>Learn Financial Literacy</h3>
          <p>Explore the essentials of managing your money and investing wisely.</p>
        </div>
        <div class="feature">
          <img src="path-to-icon2.png" alt="Feature 2" />
          <h3>Engaging Games</h3>
          <p>Enhance your financial skills with fun and interactive games.</p>
        </div>
        <div class="feature">
          <img src="path-to-icon3.png" alt="Feature 3" />
          <h3>Micro Investments</h3>
          <p>Start investing with small amounts and watch your wealth grow.</p>
        </div>
      </div>
    </section>
  
    
    <section class="cta-section">
      <h2>Ready to Take Control of Your Finances?</h2>
      <p>Join us today and start your journey toward financial freedom!</p>
      <a href="/contact" class="cta-button">Join Now</a>
    </section>
  
    <section class="Chat">
    
    </section>
  </div>
    
      </main>  

  
      </div>
      
      </div>
      
    );
  }
  
  export default LandingPage;
  