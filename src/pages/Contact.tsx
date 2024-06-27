import { useNavigate } from "react-router-dom";
import "./styles.css";

const Contact = () => {
    const navigate = useNavigate();

    return (
        <div className="contact-container">
            <h5>Welcome to the Contact Page!</h5>
            <div className="back-button-container">
                <button onClick={() => navigate("/")}>
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default Contact;
