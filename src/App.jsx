import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';
import About from './components/About';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import BlogSection from './components/BlogSection';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Category />
        <About />
        <BlogSection/>
        <Footer />
      </main>
      <BackToTop />
    </>
  );
};

export default App;