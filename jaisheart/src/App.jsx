import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import {
  Navbar,
  HomePage,
  About,
  Works,
  PrivacyPolicy,
  Footer
} from "./components";

const SiteLayout = ({ children }) => (
  <div className="relative z-0 min-h-screen overflow-x-hidden bg-primary">
    <div className="min-h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <Navbar />
      {children}
      <Footer />
    </div>
  </div>
);

const Home = () => (
  <SiteLayout>
    <HomePage />
    <Works />
    <About />
  </SiteLayout>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/privacy-policy"
        element={
          <SiteLayout>
            <PrivacyPolicy />
          </SiteLayout>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
