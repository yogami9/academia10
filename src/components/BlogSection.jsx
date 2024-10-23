
import blog1 from './assets/images/blog-1.jpg';
import blog2 from './assets/images/blog-2.jpg';
import blog3 from './assets/images/blog-3.jpg';

const Blog = () => {
  return (
    <section className="section blog has-bg-image" id="blog" aria-label="blog">
      <div className="container">
        <p className="section-subtitle">Latest Articles</p>
        <h2 className="h2 section-title">Get News With EduAcers</h2>
        <ul className="grid-list">
          {[{ img: blog1, title: 'Become A Better Blogger: Content Planning', date: 'Oct 10, 2021' },
            { img: blog2, title: 'Tips for Effective Online Learning', date: 'Oct 11, 2021' },
            { img: blog3, title: 'Understanding the Value of Remote Work', date: 'Oct 12, 2021' }].map(blog => (
            <li key={blog.title}>
              <div className="blog-card">
                <figure className="card-banner img-holder has-after" style={{ '--width': 370, '--height': 370 }}>
                  <img src={blog.img} width="370" height="370" loading="lazy" alt={blog.title} className="img-cover" />
                </figure>
                <div className="card-content">
                  <a href="#" className="card-btn" aria-label="read more">
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>
                  <a href="#" className="card-subtitle">Online</a>
                  <h3 className="h3">
                    <a href="#" className="card-title">{blog.title}</a>
                  </h3>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                      <span className="span">{blog.date}</span>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>
                      <span className="span">0 Comments</span>
                    </li>
                  </ul>
                  <p className="card-text">
                    Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;