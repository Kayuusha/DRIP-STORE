import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

function formatSize(value) {
  if (!value) return undefined;
  return String(value).endsWith('px') ? value : `${value}px`;
}

function Gallery({ images, width, height, radius, showThumbs, className }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const slide = images[currentIndex];
  const hasContent = Boolean(slide.tag || slide.title || slide.description || slide.buttonText);

  return (
    <div
      className={`gallery ${hasContent ? 'gallery--hero' : 'gallery--product'} ${className || ''}`}
      style={{ width: '100%', maxWidth: formatSize(width) || '100%', margin: hasContent ? '0 auto' : undefined }}
    >
      <div
        className="gallery__slide"
        style={{
          height: formatSize(height) || 'auto',
          minHeight: hasContent ? '480px' : undefined,
          borderRadius: !hasContent ? (radius || '0px') : undefined,
        }}
      >
        {hasContent && <div className="gallery__ornament" aria-hidden="true" />}

        <button
          className="gallery__arrow gallery__arrow--left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          aria-label="Slide anterior"
        >
          <img src={arrowLeft} alt="Anterior" />
        </button>

        <button
          className="gallery__arrow gallery__arrow--right"
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          aria-label="Próximo slide"
        >
          <img src={arrowRight} alt="Próximo" />
        </button>

        {hasContent && (
          <div className="gallery__content">
            {slide.tag && <span className="gallery__tag">{slide.tag}</span>}
            {slide.title && <h2 className="gallery__title">{slide.title}</h2>}
            {slide.description && <p className="gallery__description">{slide.description}</p>}
            {slide.buttonText && (
              <Link to={slide.buttonLink || '/products'} className="gallery__button">
                {slide.buttonText}
              </Link>
            )}
          </div>
        )}

        <div
          className="gallery__image-wrapper"
          style={!hasContent ? { maxWidth: '100%' } : undefined}
        >
          <img
            className="gallery__image"
            src={slide.src}
            alt={slide.title || `Slide ${currentIndex + 1}`}
            style={{ borderRadius: !hasContent ? (radius || '0px') : undefined }}
          />
        </div>
      </div>

      {!showThumbs && (
        <div className="gallery__dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`gallery__dot ${i === currentIndex ? 'gallery__dot--active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {showThumbs && (
        <div className="gallery__thumbs">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={`Miniatura ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className="gallery__thumb"
              style={{
                borderRadius: radius || '0px',
                border: i === currentIndex ? '2px solid #C92071' : '2px solid transparent',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
