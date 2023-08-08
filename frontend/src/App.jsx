import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./components/AboutMe";
import ProjectInfo from "./components/ProjectInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <AboutMe />
      <ProjectInfo />
    </div>
  );
}

export default App;
