import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addToFavorites, removeFromFavorites } from '../redux/favoritesSlice';
import { useAuth } from '../../context/AuthContext'; // Mantener para verificar autenticación

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
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <h2>{product.title}</h2>
              {product.thumbnail ? (
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ width: "150px", height: "150px" }}
                />
              ) : (
                <p>No image available</p>
              )}
              <p>Price: ${product.price}</p>
              <button 
                onClick={() => handleFavoriteClick(product)}
                className={`favorite-button ${isInFavorites(product.id) ? 'active' : ''}`}
              >
                {isInFavorites(product.id) ? '❤️ Quitar de favoritos' : '🤍 Agregar a favoritos'}
              </button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;