import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Styles from "styles/Header.module.css";

const Header = ({ search = false, refetcher }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("keyword");
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setKeyword(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?keyword=${keyword}`);
    setKeyword("");
  };
  useEffect(() => {
    if (query) {
      refetcher(query);
    }
  }, [query]);
  return (
    <header className={Styles.header}>
      <div className={Styles.logoContainer}>
        <h1 className={Styles.logo}>Movie App</h1>
        <nav className={Styles.navigation}>
          <ul>
            <li style={{ opacity: location.pathname === "/" && "1" }}>
              <Link to={"/"}>Home</Link>
            </li>
            <li style={{ opacity: location.pathname === "/search" && "1" }}>
              <Link to={"/search"}>Search</Link>
            </li>
          </ul>
        </nav>
      </div>
      {search && (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={keyword}
            onChange={onChange}
            placeholder="Search..."
          />
        </form>
      )}
    </header>
  );
};

export default Header;
