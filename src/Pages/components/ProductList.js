import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addToFavorites, removeFromFavorites } from '../redux/favoritesSlice';
import Navbar from './NavBar';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios("https://junin-eccomerce-api.onrender.com/api/products");
        const data = response.data.products;
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const isInFavorites = (productId) => {
    return favorites.some(item => item.id === productId);
  };

  const handleFavoriteClick = (product) => {
    if (isInFavorites(product.id)) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="products-page">
      <Navbar />
      <div className="products-content">
        <div className="products-header">
          <h1>Nuestros Productos</h1>
          <p>Descubre nuestra selección de productos exclusivos</p>
        </div>
        
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Cargando productos...</p>
          </div>
        ) : (
          <div className="product-list">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="product-item">
                  <h2>{product.title}</h2>
                  {product.thumbnail ? (
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      onError={(e) => {
                        e.target.onerror = null;
                      }}
                    />
                  ) : (
                    <img alt="No image available"/>
                  )}
                  <p className="product-price">${product.price}</p>
                  <button 
                    onClick={() => handleFavoriteClick(product)}
                    className={`favorite-button ${isInFavorites(product.id) ? 'active' : ''}`}
                  >
                    {isInFavorites(product.id) ? '❤️ Quitar de favoritos' : '🤍 Agregar a favoritos'}
                  </button>
                </div>
              ))
            ) : (
              <div className="no-products">
                <p>No hay productos disponibles en este momento.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;