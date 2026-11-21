function FooterInfo({ title, informations }) {
  return (
    <section className="footer-info">
      <h3>{title}</h3>
      <ul>
        {informations.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FooterInfo;
