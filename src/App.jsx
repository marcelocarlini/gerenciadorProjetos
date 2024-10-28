import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import NewProject from "./pages/NewProject";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/newproject" element={<NewProject />} />
      </Routes>
    </Router>
  );
};

export default App;
