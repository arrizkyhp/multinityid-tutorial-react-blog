import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Blog from 'pages/Blog';
import Contact from 'pages/Contact';
import Nav from 'layout/Nav';
import BlogDetail from 'pages/BlogDetail';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog/:id" element={<BlogDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
