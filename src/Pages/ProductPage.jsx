import React from 'react';
import ProductPage from './components/ProductList'; 
import { Provider } from 'react-redux';

function ProductsPage() {
  return (
    <div>
      <h1>Nuestros Productos</h1>
        <ProductPage />
    </div>
  );
}

export default ProductsPage;
