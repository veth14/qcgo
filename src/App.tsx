import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<div className="container mx-auto py-20 text-center"><h1 className="text-3xl font-bold">Page Not Found</h1></div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
