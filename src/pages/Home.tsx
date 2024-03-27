import { useAuthContext } from "@asgardeo/auth-react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Home = () => {
    const { state, signIn, signOut } = useAuthContext();
    const navigate = useNavigate();

    return (
        <>
            <button
                className="contact-button"
                onClick={() => navigate("/contact")}
            >
                Contact Page
            </button>
            <div className="login-button-container">
                {
                    state.isAuthenticated
                        ? <button onClick={() => signOut()}>Logout</button>
                        : <button onClick={() => signIn()}>Login</button>
                }
            </div>
        </>
    )
};

export default Home;
