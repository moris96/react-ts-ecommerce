import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";

// import { NavBar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { NavBar } from "./components/NavBar";


function App() {
  return (
    <ShoppingCartProvider>
      {/* <NavBar/> */}
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/home" element={ <Home/> } />
          <Route path="/" element={ <Store/> } />
          <Route path="/about" element={ <About/> } />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App
