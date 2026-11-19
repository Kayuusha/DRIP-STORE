import { Link } from 'react-router-dom';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import Section from '../components/Section/Section';
import ProductListing from '../components/ProductListing/ProductListing';
import heroSneaker from '../assets/hero.png';
import specialOfferImg from '../assets/special-offer.png';
import iconTshirt from '../assets/icons/cat-tshirt.svg';
import iconPants from '../assets/icons/cat-pants.svg';
import iconHeadphones from '../assets/icons/cat-headphones.svg';
import iconSneakers from '../assets/icons/cat-sneakers.svg';
import './HomePage.css';

const slides = [
  {
    src: heroSneaker,
    tag: 'Melhores ofertas personalizadas',
    title: 'Queima de stoque Nike 🔥',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    buttonText: 'Ver Ofertas',
    buttonLink: '/products',
  },
  {
    src: '/produc-image-1.jpeg',
    tag: 'Lançamento exclusivo',
    title: 'Nova Coleção Adidas ⚡',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    buttonText: 'Ver Ofertas',
    buttonLink: '/products',
  },
  {
    src: '/produc-image-2.jpeg',
    tag: 'Oferta especial',
    title: 'Air Jordan Edição Limitada 🏀',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    buttonText: 'Ver Ofertas',
    buttonLink: '/products',
  },
  {
    src: '/produc-image-4.jpeg',
    tag: 'Novidades da semana',
    title: 'Estilo Urbano Casual 👟',
    description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    buttonText: 'Ver Ofertas',
    buttonLink: '/products',
  },
];

const colecoesDestaque = [
  { img: '/collection-1.png', alt: 'Novo drop Supreme', discount: '30% OFF' },
  { img: '/collection-2.png', alt: 'Coleção Adidas', discount: '30% OFF' },
  { img: '/collection-3.png', alt: 'Novo Beats Bass', discount: '30% OFF' },
];

const categoriasDestaque = [
  { label: 'Camisetas', icon: iconTshirt },
  { label: 'Calças', icon: iconPants },
  { label: 'Bonés', icon: iconPants },
  { label: 'Headphones', icon: iconHeadphones },
  { label: 'Tênis', icon: iconSneakers },
];

const produtosEmAlta = [
  { id: 1, name: 'K-Swiss V8 - Masculino', category: 'Tênis', image: '/product-thumb-1.jpeg', price: 200, priceDiscount: 100, badge: '30% OFF' },
  { id: 2, name: 'Nike Air Max 90', category: 'Tênis', image: '/product-thumb-2.jpeg', price: 320, priceDiscount: 249.9, badge: '30% OFF' },
  { id: 3, name: 'Adidas Ultraboost', category: 'Tênis', image: '/product-thumb-3.jpeg', price: 450 },
  { id: 4, name: 'Puma Suede Classic', category: 'Tênis', image: '/product-thumb-4.jpeg', price: 280, priceDiscount: 199.9 },
  { id: 5, name: 'Vans Old Skool', category: 'Tênis', image: '/product-thumb-5.jpeg', price: 299.9 },
  { id: 6, name: 'Nike Revolution 6', category: 'Tênis', image: '/produc-image-1.jpeg', price: 350, priceDiscount: 279.9 },
  { id: 7, name: 'Asics Gel-Kayano', category: 'Tênis', image: '/produc-image-2.jpeg', price: 499.9 },
  { id: 8, name: 'New Balance 574', category: 'Tênis', image: '/produc-image-3.jpeg', price: 390, priceDiscount: 310 },
];

function HomePage() {
  return (
    <Layout>
      <Gallery
        images={slides}
        width="1440"
        height="540"
      />

      <Section title="Coleções em destaque" titleAlign="left">
        <div className="collections-grid">
          {colecoesDestaque.map((item) => (
            <div key={item.alt} className="collection-card">
              <span className="collection-badge">{item.discount}</span>
              <img src={item.img} alt={item.alt} />
              <Link to="/products" className="collection-button">
                Comprar
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Coleções em destaque" titleAlign="center">
        <div className="category-icons-row">
          {categoriasDestaque.map((cat) => (
            <Link key={cat.label} to="/products" className="category-icon-item">
              <div className="category-icon-circle">
                <img src={cat.icon} alt={cat.label} />
              </div>
              <span>{cat.label}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        title="Produtos em alta"
        titleAlign="left"
        link={{ text: 'Ver todos', href: '/products' }}
      >
        <ProductListing products={produtosEmAlta} />
      </Section>

      <section className="special-offer">
        <div className="special-offer-image">
          <div className="special-offer-circle" />
          <img src={specialOfferImg} alt="Air Jordan edição de colecionador" />
        </div>

        <div className="special-offer-content">
          <span className="special-offer-tag">Oferta especial</span>
          <h2>Air Jordan edição de colecionador</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <Link to="/product/1" className="special-offer-button">
            Ver Oferta
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
