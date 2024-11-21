import heroBg from './assets/images/hero-bg.svg'; 
import heroBanner1 from './assets/images/hero-banner-1.jpg';
import heroBanner2 from './assets/images/hero-banner-2.jpg';
import heroShape1 from './assets/images/hero-shape-1.svg';
import heroShape2 from './assets/images/hero-shape-2.png';

const Hero = () => {
    return (
        <section 
            className="section hero has-bg-image" 
            id="home" 
            aria-label="home" 
            style={{ backgroundImage: `url(${heroBg})` }} 
        >
            <div className="container">
                <div className="hero-content">
                    <h1 className="h1 section-title">
                        The Best Homework Help Program to <span className="span">Enroll</span> for Academic Success
                    </h1>
                    <p className="hero-text">
                        Your homework, done right, done fast.
                    </p>
                </div>

                <figure className="hero-banner">
                    <div className="img-holder one" style={{ width: 270, height: 300 }}>
                        <img 
                            src={heroBanner1} 
                            alt="A student studying with books" 
                            className="img-cover" 
                        />
                    </div>
                    <div className="img-holder two" style={{ width: 240, height: 370 }}>
                        <img 
                            src={heroBanner2} 
                            alt="A student receiving homework help" 
                            className="img-cover" 
                        />
                    </div>
                    <img 
                        src={heroShape1} 
                        className="shape hero-shape-1" 
                        alt="Decorative shape 1" 
                    />
                    <img 
                        src={heroShape2} 
                        className="shape hero-shape-2" 
                        alt="Decorative shape 2" 
                    />
                </figure>
            </div>
        </section>
    );
};

export default Hero;