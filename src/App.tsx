import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { default as TermsOfUse } from './pages/TermsOfUse';
import FAQs from './pages/FAQs';
import Privacy from './pages/Privacy';
import AboutUs from './pages/AboutUs';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<div className="container mx-auto py-20 text-center"><h1 className="text-3xl font-bold">Page Not Found</h1></div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
