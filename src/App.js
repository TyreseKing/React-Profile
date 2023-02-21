import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header"
import About from "./pages/About"
// import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import Footer from "./components/Footer"

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    // if (currentPage === 'Contact') {
    //   return <Contact />;
    // }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
      return <Portfolio />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
