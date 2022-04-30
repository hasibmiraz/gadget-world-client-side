import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
