import Detail from "pages/Detail";
import Home from "pages/Home";
import Search from "pages/Search";
import Styles from "styles/App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
