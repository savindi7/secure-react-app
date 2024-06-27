import { useAuthContext } from "@asgardeo/auth-react";
import { useNavigate } from "react-router-dom";

const Unauthenticated = () => {
    const { signIn } = useAuthContext();
    const navigate = useNavigate();

    return (
        <div>
            <h5>You need to be logged in to access this page</h5>
            <div className="button-container">
                <button className="text-button" onClick={() => navigate("/")}>
                    Go Back
                </button>
                <button onClick={() => { signIn() }}>Login</button>
            </div>
        </div>
    );
};

export default Unauthenticated;
