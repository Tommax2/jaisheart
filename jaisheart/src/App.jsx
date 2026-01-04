import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {
  Navbar,
  HomePage,
  About,
  Footer
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <HomePage />
          <About />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
