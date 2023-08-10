import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ChartDropdown from "./components/ChartDropdown";

const Options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        <ChartDropdown Options={Options}/>
        <ChartDropdown Options={Options}/>
        <ChartDropdown Options={Options}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
