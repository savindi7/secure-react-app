import { useAuthContext } from "@asgardeo/auth-react";
import "./styles.css";

const Home = () => {
  const { state } = useAuthContext();

  return (
    <>
      {state?.isAuthenticated ? (
        <>
          <h4>Welcome {state?.displayName}!</h4>
          <div>
            <img src="src/assets/hi.png" />
          </div>
        </>
      ) : (
        <h4>Welcome! Please sign in to continue.</h4>
      )}
    </>
  );
};

export default Home;
