import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ProductList, ProductDetail } from './pages';
import { Header } from './shared/layout';

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
