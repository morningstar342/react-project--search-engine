import { Routes, Route, Link } from "react/router";
import Home from "./pages/home";
import Page2 from "./pages/page2";

function App() {
  return (
    <div className="App">
      {/*
        Put all in body (MD)
        ====================================================
        ====================================================
              Pages XXX.JS in pages MS
        ====================================================
        ====================================================
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
      <Link to="/home"></Link>
    </div>
  );
}

export default App;
