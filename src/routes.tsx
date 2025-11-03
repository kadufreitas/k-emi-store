import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ProductList, ProductDetail } from './pages';
import { Header } from './common/layout';
import { AppProvider } from './common/context/AppContext';
import { Bag } from './pages/Bag';

function AppRoutes() {
  const basename = import.meta.env.BASE_URL || '/';

  return (
    <Router basename={basename}>
      <AppProvider>
        <Header />
        <main className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path="/bag" element={<Bag />} />
          </Routes>
        </main>
      </AppProvider>
    </Router>
  );
}

export default AppRoutes;
