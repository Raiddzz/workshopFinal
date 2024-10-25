import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import './App.css';
import { LandingPage } from './Pages/LandingPage';
import { HomePage } from './Pages/Home';
import ProductsPage from './Pages/components/ProductList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/products" element={<ProductsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
