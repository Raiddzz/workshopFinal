import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LandingPage } from './Pages/LandingPage';
import { store } from './Pages/redux/store';
import ProductsPage from './Pages/components/ProductList';
import Login from './Pages/components/login';
import Register from './Pages/components/register';
import ProtectedRoute from './Pages/components/ProtectedRoute'
import './App.css';
import './Pages/styles/Auth.css';
import { Provider } from 'react-redux';
import FavoritesPage from './Pages/FavoritesPage';

{/* el router lo dividi por rutas protegidas y rutas públicas */}

function App() {
  return (
    <Provider store={store}>
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ruta protegida */}
          <Route path="/products" element={
            <ProtectedRoute>
              <ProductsPage />
            </ProtectedRoute>
          } />
          <Route path="/favorites" element={<FavoritesPage/>}/>
        </Routes>
      </Router>
    </AuthProvider>
    </Provider>
  );
}

export default App;