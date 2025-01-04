import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/firebase.init";
const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handelGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser);
                setUser(loginUser);
            })
            .catch(error => {
                console.log('error', error.message);
            });
    }
    return (
        <div>
            <button onClick={handelGoogleSingIn}>Log in</button>
            {
                user && (
                    <div>
                        <h4 className="text-white">User: {user.displayName}</h4>
                        <p className="text-white">Email: {user.email}</p>
                        <img src={user.photoURL} alt="User" />
                    </div>
                )
            }
        </div>
    );
};

export default Login;