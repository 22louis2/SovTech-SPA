import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import People from "./pages/People";
import Search from "./pages/Search";

function App() {
  return (
    <div className="gradient-bg-welcome">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="categories/:category" element={<Category />} />
          <Route path="people" element={<People />} />
          <Route path="search" element = {<Search/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
