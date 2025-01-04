import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/firebase.init";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Function to handle Google Sign-In
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log("Google Sign-In successful:", loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.error("Error during Google sign-in:", error.message);
            });
    };

    // Function to handle GitHub Sign-In
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log("GitHub Sign-In successful:", loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.error("Error during GitHub sign-in:", error.message);
            });
    };

    // Function to handle Sign-Out
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out successfully.");
                setUser(null);
            })
            .catch(error => {
                console.error("Error during sign-out:", error.message);
            });
    };

    // Inline Styles
    const styles = {
        container: {
            textAlign: "center",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#f7f9fc",
            border: "1px solid #ddd",
            borderRadius: "10px",
            maxWidth: "400px",
            margin: "20px auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
        button: {
            padding: "10px 20px",
            margin: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
        },
        googleButton: {
            backgroundColor: "#4285F4",
            color: "white",
            borderColor: "#357ae8",
        },
        githubButton: {
            backgroundColor: "#333",
            color: "white",
            borderColor: "#222",
        },
        logoutButton: {
            backgroundColor: "#f44336",
            color: "white",
            borderColor: "#d32f2f",
        },
        userInfo: {
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            border: "1px solid #ddd",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            textAlign: "left",
        },
        userImage: {
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "2px solid #ddd",
            margin: "10px 0",
        },
    };

    return (
        <div style={styles.container}>
            {/* Show different buttons based on user login state */}
            {user ? (
                <button
                    style={{ ...styles.button, ...styles.logoutButton }}
                    onClick={handleSignOut}
                >
                    Log out
                </button>
            ) : (
                <>
                    <button
                        style={{ ...styles.button, ...styles.googleButton }}
                        onClick={handleGoogleSignIn}
                    >
                        Google Login
                    </button>
                    <button
                        style={{ ...styles.button, ...styles.githubButton }}
                        onClick={handleGithubSignIn}
                    >
                        GitHub Login
                    </button>
                </>
            )}

            {/* Display user information when logged in */}
            {user && (
                <div style={styles.userInfo}>
                    <img
                        src={user.photoURL}
                        alt={`${user.displayName}'s profile`}
                        style={styles.userImage}
                    />
                    <h4>User: {user.displayName}</h4>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </div>
    );
};

export default Login;