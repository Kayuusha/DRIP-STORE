import Logo from '../Logo/Logo';
import FooterInfo from './FooterInfo';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import './Footer.css';

const informacoes = [
  { text: 'Sobre Drip Store', link: '/about' },
  { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/careers' },
  { text: 'Meus Pedidos', link: '/meus-pedidos' },
];

const categorias = [
  { text: 'Camisetas', link: '/products' },
  { text: 'Calças', link: '/products' },
  { text: 'Bonés', link: '/products' },
  { text: 'Headphones', link: '/products' },
  { text: 'Tênis', link: '/products' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <section className="footer-about">
          <Logo variant="footer" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>
        </section>

        <FooterInfo title="Informação" informations={informacoes} />

        <FooterInfo title="Categorias" informations={categorias} />

        <section className="footer-contact">
          <h3>Contato</h3>

          <p>
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
          </p>

          <p>(85) 3051-3411</p>
        </section>
      </div>

      <hr />
      <div className="footer-bottom">
        <p>© 2024 Digital Store</p>
      </div>
    </footer>
  );
}

export default Footer;
