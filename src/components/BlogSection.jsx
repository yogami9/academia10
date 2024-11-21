import { useState, useEffect } from 'react'; // Import necessary hooks
import blog1 from './assets/images/blog-1.jpg';
import blog2 from './assets/images/blog-2.jpg';
import blog3 from './assets/images/blog-3.jpg';

const Blog = () => {
  const [questions, setQuestions] = useState([]); // State to store questions
  const [loading, setLoading] = useState(true); // State to handle loading status

  // Function to fetch questions
  const fetchQuestions = async () => {
    try {
      const response = await fetch(''); // Fetch questions from your API
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuestions(data); // Set questions into state
    } catch (error) {
      console.error('Error fetching questions:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchQuestions(); // Call fetch function on component mount
  }, []);

  // Render loading state or questions
  return (
    <section className="section blog has-bg-image" id="blog" aria-label="blog">
      <div className="container">
        <p className="section-subtitle">Latest Articles</p>
        <h2 className="h2 section-title">Get News With EduAcers</h2>
        <ul className="grid-list">
          {loading ? (
            <li>Loading...</li> // Display loading message if fetching data
          ) : (
            questions.map((question, index) => (
              <li key={question._id}> {/* Assuming each question has a unique id named _id */}
                <div className="blog-card">
                  <figure className="card-banner img-holder has-after" style={{ '--width': 370, '--height': 370 }}>
                    <img 
                      src={index === 0 ? blog1 : index === 1 ? blog2 : blog3} // Use placeholder images based on index
                      width="370" 
                      height="370" 
                      loading="lazy" 
                      alt={question.title}
                      className="img-cover" 
                    />
                  </figure>
                  <div className="card-content">
                    <a href="#" className="card-btn" aria-label="read more">
                      <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </a>
                    <a href="#" className="card-subtitle">Online</a>
                    <h3 className="h3">
                      <a href="#" className="card-title">{question.title}</a>
                    </h3>
                    <ul className="card-meta-list">
                      <li className="card-meta-item">
                        <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                        <span className="span">{new Date(question.createdAt).toLocaleDateString()}</span> {/* Assuming a created date */}
                      </li>
                      <li className="card-meta-item">
                        <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>
                        <span className="span">0 Comments</span>
                      </li>
                    </ul>
                    <p className="card-text">
                      {question.description || "Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed."} {/* Replace the static text with question description */}
                    </p>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default Blog;