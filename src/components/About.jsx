import aboutBanner from './assets/images/about-banner.jpg'; 
import aboutShape1 from './assets/images/about-shape-1.svg';
import aboutShape2 from './assets/images/about-shape-2.svg';
import aboutShape3 from './assets/images/about-shape-3.png';
import aboutShape4 from './assets/images/about-shape-4.svg';

const aboutItems = [
    { id: 1, text: 'Expert Academic Help' },
    { id: 2, text: '24/7 Support' },
    { id: 3, text: 'Lifetime Access' },
];

const About = () => {
    return (
        <section className="section about" id="about" aria-label="about">
            <div className="container">
                {/* About Banner Section */}
                <figure className="about-banner">
                    <div className="img-holder" style={{ "--width": 520, "--height": 370 }}>
                        <img 
                            src={aboutBanner} 
                            loading="lazy" 
                            alt="A banner showcasing academic assistance" 
                            className="img-cover" 
                        />
                    </div>
                    <img src={aboutShape1} className="shape about-shape-1" alt="Decorative shape 1" />
                    <img src={aboutShape2} className="shape about-shape-2" alt="Decorative shape 2" />
                    <img src={aboutShape3} className="shape about-shape-3" alt="Decorative shape 3" />
                </figure>

                {/* About Content Section */}
                <div className="about-content">
                    <p className="section-subtitle">About Us</p>
                    <h2 className="h2 section-title">
                        Over 10 Years in offering <span className="span">Academic Solutions</span> making schooling as stress-free as possible
                    </h2>
                    <p className="section-text">
                        With years of experience in the field of academic assistance, our team possesses the knowledge and skills to tackle any academic challenge. We are dedicated to providing reliable, efficient, and effective solutions that help our clients excel in their studies. Your academic success is our top priority.
                    </p>

                    {/* List of About Items */}
                    <ul className="about-list">
                        {aboutItems.map((item) => (
                            <li className="about-item" key={item.id}>
                                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                                <span className="span">{item.text}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Additional Decorative Shape */}
                    <img 
                        src={aboutShape4} 
                        width={100} 
                        height={100} 
                        loading="lazy" 
                        alt="Decorative shape 4" 
                        className="shape about-shape-4" 
                    />
                </div>
            </div>
        </section>
    );
};

export default About;