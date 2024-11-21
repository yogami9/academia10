import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';
import About from './components/About';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import BlogSection from './components/BlogSection';
import TopHeader from './components/TopHeader';
import QuestionsSection from './components/QuestionsSection';
import QuestionsPage from './components/QuestionsPage'; // Import the questions page component

const App = () => {
  return (
    <Router>
      <TopHeader /> 
    
      <main>
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={
            <>
             
              <Hero />
              <Category />
              <About />
              <QuestionsSection/>
              
            </>
          } /> {/* Home Page */}

          <Route path="/questions" element={<QuestionsPage />} /> {/* Questions page only */}
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </Router>
  );
};

export default App;