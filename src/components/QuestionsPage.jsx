import React, { useEffect, useState } from 'react';
import './QuestionsPage.css'; // Ensure this file is properly linked.

const QuestionsPage = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedQuestion, setSelectedQuestion] = useState(null);

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

    useEffect(() => {
        fetchQuestions();
    }, []);

    const filteredQuestions = questions.filter((question) =>
        question.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleViewAnswer = (question) => {
        console.log("View Answer clicked for: ", question); // Log selection for debugging
        setSelectedQuestion(question);
    };

    const handleCloseModal = () => {
        setSelectedQuestion(null);
    };

    return (
        <div className="questions-page">
            <h2 className="h2 section-title">All Questions</h2>
            <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <div className="questions-cards">
                    {filteredQuestions.map((question) => (
                        <div className="question-card" key={question._id}>
                            <h3>{question.title}</h3>
                            <button className="view-answer" onClick={() => handleViewAnswer(question)}>
                                View Answer
                            </button>
                        </div>
                    ))}
                </div>
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
        </div>
    );
};

export default QuestionsPage;