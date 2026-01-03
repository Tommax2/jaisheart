import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {
  Navbar,
  HomePage,
  Footer
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <HomePage />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
