import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ id = 1, image, name, category = 'Tênis', price, priceDiscount, badge }) {
  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-card-image">
        {badge && <span className="product-card-badge">{badge}</span>}
        <img src={image} alt={name} />
      </div>

      <span className="product-card-category">{category}</span>
      <h3 className="product-card-name">{name}</h3>

      <div className="product-card-prices">
        {priceDiscount ? (
          <>
            <span className="product-card-price-old">R$ {price}</span>
            <span className="product-card-price">R$ {priceDiscount}</span>
          </>
        ) : (
          <span className="product-card-price">R$ {price}</span>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
