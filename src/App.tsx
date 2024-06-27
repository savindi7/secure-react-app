import { AuthProvider, SecureApp } from "@asgardeo/auth-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import "./App.css";

const authConfig = {
  signInRedirectURL: "http://localhost:3000",
  signOutRedirectURL: "http://localhost:3000",
  clientID: "<client_id>",
  baseUrl: "https://api.asgardeo.io/t/<org_name>",
  scope: ["openid", "profile"]
};

const AppContent = () => {
  const Loader = () => {
    return (
      <div className="loading-container">
        <p>...</p>
      </div>
    );
  };

  return (
    <SecureApp fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </SecureApp>
  );
};

const App = () => (
  <AuthProvider config={authConfig}>
    <Router>
      <AppContent />
    </Router>
  </AuthProvider>
);

export default App;
