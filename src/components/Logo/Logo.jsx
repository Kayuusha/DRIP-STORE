import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';
import './Logo.css';

function Logo({ variant = 'header' }) {
  return (
    <div className={`logo logo-${variant}`}>
      <img
        src={variant === 'footer' ? logoFooter : logoHeader}
        alt="Digital Store"
        width="253"
        height="44"
      />
    </div>
  );
}

export default Logo;
