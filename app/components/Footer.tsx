const Footer: React.FC<{ viewCount: string }> = ({ viewCount }) => {
  return (
    <footer className="row ends">
      <p style={{ display: "inline-block" }}>
        - <span id="count">{viewCount.padStart(6, "0")}</span> visits
      </p>
      <nav>
        <a href="https://www.instagram.com/nycphotostroll/">
          <img alt="instagram" src="/images/ig.svg" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
