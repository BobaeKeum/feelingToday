import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./pages/Detail/Detail";
import DetailList from "./pages/DetailList/DetailList";
import Home from "./pages/Home/Home";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* 홈페이지 */}
          <Route path="/" element={<Home />} />

          {/* 입력창 */}
          <Route path="/detail" element={<Detail />} />

          {/* 리스트 */}
          <Route path="/detaillist" element={<DetailList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
