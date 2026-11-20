import { Link, useParams } from 'react-router-dom';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox/BuyBox';
import ProductOptions from '../components/ProductOptions/ProductOptions';
import Section from '../components/Section/Section';
import ProductListing from '../components/ProductListing/ProductListing';
import './ProductViewPage.css';

const produtosCatalogo = [
  { id: 1, name: 'K-Swiss V8 - Masculino', category: 'Tênis', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 100, badge: '30% OFF' },
  { id: 2, name: 'Nike Air Max 90', category: 'Tênis', image: '/product-thumb-2.jpeg', price: 320, priceDiscount: 249.9, badge: '30% OFF' },
  { id: 3, name: 'Adidas Ultraboost', category: 'Tênis', image: '/product-thumb-3.jpeg', price: 450 },
  { id: 4, name: 'Puma Suede Classic', category: 'Tênis', image: '/product-thumb-4.jpeg', price: 280, priceDiscount: 199.9 },
  { id: 5, name: 'Vans Old Skool', category: 'Tênis', image: '/product-thumb-5.jpeg', price: 299.9 },
  { id: 6, name: 'Nike Revolution 6', category: 'Tênis', image: '/produc-image-1.jpeg', price: 350, priceDiscount: 279.9 },
  { id: 7, name: 'Asics Gel-Kayano', category: 'Tênis', image: '/produc-image-2.jpeg', price: 499.9 },
  { id: 8, name: 'New Balance 574', category: 'Tênis', image: '/produc-image-3.jpeg', price: 390, priceDiscount: 310 },
];

const productGalleryImages = [
  { src: '/produc-image-1.jpeg' },
  { src: '/produc-image-2.jpeg' },
  { src: '/produc-image-3.jpeg' },
  { src: '/produc-image-4.jpeg' },
  { src: '/produc-image-5.jpeg' },
];

function ProductViewPage() {
  const { id } = useParams();
  const produto = produtosCatalogo.find((p) => String(p.id) === id) || produtosCatalogo[0];

  return (
    <Layout>
      <nav className="product-breadcrumb" aria-label="Navegação">
        <Link to="/">Home</Link> / <Link to="/products">Produtos</Link> /{' '}
        <Link to="/products">Tênis</Link> / <span>{produto.name}</span>
      </nav>

      <div className="product-view-container">
        <Gallery
          images={productGalleryImages}
          showThumbs
          width="700"
          height="570"
          radius="4px"
        />

        <BuyBox
          name={produto.name}
          reference={`Casual | Nike | REF: 384167${produto.id}`}
          stars="4.7"
          rating="90"
          price={produto.price}
          priceDiscount={produto.priceDiscount}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        >
          <div className="buybox-option-group">
            <span>Tamanho</span>
            <ProductOptions
              options={['39', '40', '41', '42', '43']}
              radius="4px"
              shape="square"
              type="text"
            />
          </div>

          <div className="buybox-option-group">
            <span>Cor</span>
            <ProductOptions
              options={['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7']}
              shape="circle"
              type="color"
            />
          </div>
        </BuyBox>
      </div>

      <Section
        title="Produtos recomendados"
        titleAlign="left"
        link={{ text: 'Ver todos', href: '/products' }}
      >
        <ProductListing products={produtosCatalogo.slice(0, 4)} />
      </Section>
    </Layout>
  );
}

export default ProductViewPage;
