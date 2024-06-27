import { AuthProvider, useAuthContext } from "@asgardeo/auth-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";
import Unauthenticated from "./pages/Unauthenticated";
import { ReactNode } from "react";

const authConfig = {
  signInRedirectURL: "http://localhost:3000",
  signOutRedirectURL: "http://localhost:3000",
  clientID: "JMBSI4EAlfVjmpJ6UUtk9pyZejca",
  baseUrl: "https://api.asgardeo.io/t/savindi",
  scope: ["openid", "profile"]
};

const AppContent = () => {

  const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { state } = useAuthContext();

    if (!state.isAuthenticated) {
      return <Unauthenticated />;
    }

    return children;
  };

  return (
    <Routes>
      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        } />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
};

const App = () => (
  <AuthProvider config={authConfig}>
    <Router>
      <AppContent />
    </Router>
  </AuthProvider>
);

export default App;
