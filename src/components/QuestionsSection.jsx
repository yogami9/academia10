import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './QuestionsSection.css'; // Import CSS styles

const QuestionsSection = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    // Function to fetch questions from the API
    const fetchQuestions = async () => {
        try {
            const response = await fetch('https://eduacers-backend.onrender.com/questions');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setQuestions(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Effect to run fetchQuestions on component mount
    useEffect(() => {
        fetchQuestions();
    }, []);

    // Function to handle displaying the selected question's answer in a modal
    const handleViewAnswer = (question) => {
        setSelectedQuestion(question);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setSelectedQuestion(null);
    };

    // Limit questions displayed to the first 6
    const displayedQuestions = questions.slice(0, 6);

    return (
        <section className="questions-section">
            <p className="section-subtitle">REVISION QUESTIONS</p>
            <h2 className="h2 section-title">Get Answers With EduAcers</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <>
                    <div className="questions-cards">
                        {displayedQuestions.map((question) => (
                            <div className="question-card" key={question._id}>
                                <h3>{question.title}</h3>
                                <button className="view-answer" onClick={() => handleViewAnswer(question)}>
                                    View Answer
                                </button>
                            </div>
                        ))}
                    </div>
                    {questions.length > 6 && (
                        <Link to="/questions" className="view-more">
                            View More Questions
                        </Link>
                    )}
                </>
            )}
            {selectedQuestion && (
                <div className={`modal-background ${selectedQuestion ? 'show' : ''}`} onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={handleCloseModal}>X</button>
                        <h3>{selectedQuestion.title}</h3>
                        <p>{selectedQuestion.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default QuestionsSection;