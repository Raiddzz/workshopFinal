import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromFavorites } from './redux/favoritesSlice';
import Navbar from './components/NavBar';
import './styles/Products.css';

function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromFavorites = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  return (
    <div>
      <Navbar />
      <div className="favorites-container">
        <h1>Mis Productos Favoritos</h1>
        {favorites.length === 0 ? (
          <div className="no-favorites">
            <p>No tienes productos favoritos guardados.</p>
            <button onClick={() => navigate('/products')} className="browse-button">
              Explorar Productos
            </button>
          </div>
        ) : (
          <div className="product-list">
            {favorites.map((product) => (
              <div key={product.id} className="product-item">
                <h2>{product.title}</h2>
                {product.thumbnail && (
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  />
                )}
                <p className="product-price">Precio: ${product.price}</p>
                <button 
                  onClick={() => handleRemoveFromFavorites(product.id)}
                  className="favorite-button active"
                >
                  ❤️ Quitar de favoritos
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;