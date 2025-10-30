import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ProductList, ProductDetail } from './pages';
import { Header } from './common/layout';

function AppRoutes() {
  const basename = import.meta.env.BASE_URL || '/';

  return (
    <Router basename={basename}>
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

export default AppRoutes;
