import './Footer.scss'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p className="copyright-text">&copy; Copyright {year}, Haute Couture </p>
    </footer>
  );
};

export default Footer;
