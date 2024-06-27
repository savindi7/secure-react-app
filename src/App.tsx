import { AuthProvider } from "@asgardeo/auth-react";
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

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
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
