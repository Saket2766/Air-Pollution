import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import DropDownMenu from "./components/DropDownMenu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        <DropDownMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
