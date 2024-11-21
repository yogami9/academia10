import footerBg from './assets/images/footer-bg.png'; // Correct image import
import logoLight from './assets/icons/logo.png'; // Logo import

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="footer-top section">
        <div className="container grid-list">
          <div className="footer-brand">
            <a href="/" className="logo">
              <img src={logoLight} width={162} height={50} alt="EduAcers logo" />
            </a>
            <p className="footer-brand-text">
              
            </p>
            <div className="wrapper">
              <span className="span">Address:</span>
              <address className="address">70-80 Upper St Norwich NR2</address>
            </div>
            <div className="wrapper">
              <span className="span">Call:</span>
              <a href="tel:+447878497830" className="footer-link">+44 7878 497830</a>
            </div>
            <div className="wrapper">
              <span className="span">Email:</span>
              <a href="mailto:eduacers1@gmail.com" className="footer-link">eduacers1@gmail.com</a>
            </div>
          </div>
          <FooterLinks title="" links={[]} />
          <FooterLinks title="" links={[]} />
          <div className="footer-list">
            <p className="footer-list-title">Contacts</p>
            <p className="footer-list-text">Enter your email address to register for our newsletter subscription</p>
            <form action="" className="newsletter-form" onSubmit={handleSubscribe}>
              <input type="email" name="email" placeholder="Your email" required className="input-field" />
              <button type="submit" className="btn has-before" aria-label="Subscribe to newsletter">
                <span className="span">Subscribe</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </button>
            </form>
            <ul className="social-list">
              {['facebook', 'linkedin', 'instagram', 'twitter', 'youtube'].map((platform) => (
                <li key={platform}>
                  <a href={`https://${platform}.com`} className="social-link" target="_blank" rel="noopener noreferrer">
                    <ion-icon name={`logo-${platform}`}></ion-icon>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
              Copyright 2024 All Rights Reserved by {" " }
            <a href="/" className="copyright-link">EDUACERS</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLinks = ({ title, links }) => (
  <ul className="footer-list">
    <li><p className="footer-list-title">{title}</p></li>
    {links.map((link, index) => (
      <li key={index}>
        <a href="#" className="footer-link">{link}</a> {/* Consider improving href */}
      </li>
    ))}
  </ul>
);

const handleSubscribe = (event) => {
  event.preventDefault(); // Prevent default form submission
  const email = event.target.email.value;
  // Handle email subscription logic (e.g., sending it to an API)
  console.log('Subscribed with email:', email);
};

export default Footer;
