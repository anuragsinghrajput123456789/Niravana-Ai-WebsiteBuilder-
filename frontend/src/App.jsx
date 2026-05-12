import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Studio from './Pages/Studio';

const Layout = ({ children }) => {
  const location = useLocation();
  const isStudioRoute = location.pathname === '/studio';

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[var(--bg-primary)]">
      <Navbar />
      <main className="flex-grow w-full">
        {children}
      </main>
      {!isStudioRoute && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <>
      <ToastContainer theme="dark" position="bottom-right" toastStyle={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', color: '#fff' }} />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;