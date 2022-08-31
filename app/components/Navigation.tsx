import { Link, useLocation } from "@remix-run/react";

const links = ["events", "about", "archive"];

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <header>
      <h1 className="dropboxes">
        <Link to="/">NYC Photo Stroll</Link>
      </h1>
      <nav className="big-decision">
        {links.map((link) => (
          <Link
            className={
              location.pathname.includes(link) ? "selected" : undefined
            }
            key={link}
            to={"/" + link}
          >
            {link}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
