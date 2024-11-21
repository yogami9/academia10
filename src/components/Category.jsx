import categoryImg1 from './assets/images/category-1.svg'; 
import categoryImg2 from './assets/images/category-2.svg';
import categoryImg3 from './assets/images/category-3.svg';
import categoryImg4 from './assets/images/category-4.svg';

const categories = [
    {
        title: 'Homework Help',
        description: 'Professional homework assistance across all disciplines and educational stages.',
        badge: 'Your trusted partner for quality homework help, tailored to your specific needs.',
        img: categoryImg1,
        color: '170, 75%, 41%'
    },
    {
        title: 'Revision Support',
        description: 'Master the art of exam revision with our professional guidance.',
        badge: 'Be exam-ready with our personalized preparation.',
        img: categoryImg2,
        color: '351, 83%, 61%'
    },
    {
        title: 'Online Exams Help',
        description: 'Ace your online exams with our reliable and accurate service.',
        badge: 'Your shortcut to online exam success.',
        img: categoryImg3,
        color: '229, 75%, 58%'
    },
    {
        title: 'Online Class Attendance',
        description: 'Let us handle your online classes while you focus on other priorities.',
        badge: 'Free up your schedule with our expert online class representation.',
        img: categoryImg4,
        color: '42, 94%, 55%'
    }
];

const Category = () => {
    return (
        <section className="section category" aria-label="category">
            <div className="container">
                <p className="section-subtitle">Categories</p>
                <h2 className="h2 section-title">
                    Your <span className="span">One Stop Shop</span> For Academic Success.
                </h2>
                <ul className="grid-list">
                    {categories.map((cat, index) => (
                        <li key={index}>
                            <div className="category-card" style={{ "--color": cat.color }}>
                                <div className="card-icon">
                                    <img 
                                        src={cat.img} 
                                        width={40} 
                                        height={40} 
                                        alt={`${cat.title} icon`} 
                                        className="img" 
                                    />
                                </div>
                                <h3 className="h3">
                                    <a href="/" className="card-title">{cat.title}</a>
                                </h3>
                                <p className="card-text">{cat.description}</p>
                                <span className="card-badge">{cat.badge}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Category;