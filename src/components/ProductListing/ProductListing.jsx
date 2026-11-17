import ProductCard from '../ProductCard/ProductCard';
import './ProductListing.css';

function ProductListing({ products }) {
  return (
    <div className="product-listing">
      {products.map((product, index) => (
        <ProductCard
          key={product.id || index}
          id={product.id || index + 1}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          priceDiscount={product.priceDiscount}
          badge={product.badge}
        />
      ))}
    </div>
  );
}

export default ProductListing;
