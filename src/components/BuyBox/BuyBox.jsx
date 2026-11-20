import starIcon from '../../assets/icons/star-icon.svg';
import './BuyBox.css';

function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  return (
    <div className="buybox">
      <h1 className="buybox-name">{name}</h1>
      <span className="buybox-reference">{reference}</span>

      <div className="buybox-reviews">
        <span className="buybox-stars">
          {stars}
          <img src={starIcon} alt="Estrela" />
        </span>
        <span className="buybox-rating">({rating} avaliações)</span>
      </div>

      <div className="buybox-prices">
        {priceDiscount ? (
          <>
            <span className="buybox-price-discount">R$ {priceDiscount}</span>
            <span className="buybox-price-old">R$ {price}</span>
          </>
        ) : (
          <span className="buybox-price-discount">R$ {price}</span>
        )}
      </div>

      <div className="buybox-description-block">
        <span className="buybox-description-label">Descrição do produto</span>
        <p className="buybox-description">{description}</p>
      </div>

      <div className="buybox-options">
        {children}
      </div>

      <button type="button" className="buybox-button">
        COMPRAR
      </button>
    </div>
  );
}

export default BuyBox;
