import { useState } from 'react';
import './ProductOptions.css';

function ProductOptions({ options = [], radius = '0px', shape = 'square', type = 'text' }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="product-options">
      {options.map((option, index) => {
        const isSelected = selected === index;
        const style = {
          borderRadius: shape === 'circle' ? '50%' : radius,
          backgroundColor: type === 'color' ? option : '#ffffff',
        };

        return (
          <button
            key={index}
            type="button"
            onClick={() => setSelected(index)}
            className={`product-option product-option-${shape} ${isSelected ? 'product-option-selected' : ''}`}
            style={style}
          >
            {type === 'text' ? option : ''}
          </button>
        );
      })}
    </div>
  );
}

export default ProductOptions;
