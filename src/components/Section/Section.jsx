import { Link } from 'react-router-dom';
import './Section.css';

function Section({ title, titleAlign = 'left', link, children }) {
  return (
    <section className="section">
      <div className={`section-header section-header-${titleAlign}`}>
        <h2 className="section-title">{title}</h2>
        {link && (
          <Link to={link.href} className="section-link">
            {link.text}
          </Link>
        )}
      </div>

      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

export default Section;
