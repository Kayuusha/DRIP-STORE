import { useState } from 'react';
import './Gallery.css';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

function Gallery({ images, width, height, radius, showThumbs, className }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ handlePrev — volta para o anterior, ou vai para o ÚLTIMO se estiver no primeiro
  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // ✅ handleNext — avança para o próximo, ou vai para o PRIMEIRO se estiver no último
  const handleNext = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const slide = images[currentIndex];

  return (
    <div
      className={`gallery ${className || ''}`}
      style={{ width: '100%', maxWidth: width ? `${width}px` : '100%' }}
    >

      {/* Slide principal */}
      <div
        className="gallery__slide"
        style={{ height: height ? `${height}px` : 'auto' }}
      >

      {/* Seta esquerda */}
      <button
    className="gallery__arrow gallery__arrow--left"
    onClick={handlePrev}
    >
    <img src={arrowLeft} alt="Anterior" />
      </button>

    {/* Seta direita */}
    <button
    className="gallery__arrow gallery__arrow--right"
    onClick={handleNext}
    >
    <img src={arrowRight} alt="Próximo" />
    </button>

        {/* Coluna esquerda — texto */}
        <div className="gallery__content">
          {slide.tag && (
            <span className="gallery__tag">{slide.tag}</span>
          )}
          {slide.title && (
            <h2 className="gallery__title">{slide.title}</h2>
          )}
          {slide.description && (
            <p className="gallery__description">{slide.description}</p>
          )}
          {slide.buttonText && (
            <a href={slide.buttonLink || '#'} className="gallery__button">
              {slide.buttonText}
            </a>
          )}
        </div>

        {/* Coluna direita — imagem */}
        <div className="gallery__image-wrapper">
          <img
            className="gallery__image"
            src={slide.src}
            alt={slide.title || `Slide ${currentIndex + 1}`}
            style={{ borderRadius: radius || '0px' }}
          />
        </div>

      </div>

      {/* Bolinhas indicadoras */}
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

      {/* Thumbnails opcionais */}
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