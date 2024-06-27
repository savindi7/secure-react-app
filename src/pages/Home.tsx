import { useAuthContext, AuthenticatedComponent } from "@asgardeo/auth-react";
import "./styles.css";

const Home = () => {
    const { state } = useAuthContext();

    const Fallback = () => {
        return <p>Log in to view.</p>
    }

    return (
        <AuthenticatedComponent fallback={<Fallback />}>
            {state?.isAuthenticated && <h4>Welcome {state?.displayName}!</h4>}
            <div>
                <img src="src/assets/hi.png" />
            </div>
        </AuthenticatedComponent>
    )
};

export default Home;
