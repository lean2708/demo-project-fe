import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Tạo nhanh các Component cho các trang
const Home = () => (
  <div>
    <h2>Trang chủ</h2>
    <p>Chào mừng đến với Frontend của tôi!</p>
  </div>
);

const About = () => (
  <div>
    <h2>Giới thiệu</h2>
    <p>Đây là trang giới thiệu dự án demo.</p>
  </div>
);

function App() {
  return (
    <Router>
      <nav style={{ padding: '20px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Trang chủ</Link>
        <Link to="/about">Giới thiệu</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;