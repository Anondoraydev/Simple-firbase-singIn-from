/**
 * 1. first install firebase: npm install firebase
 * 2. console.firebase.google.com create a project
 * 3. Register project
 * 4. get firebase config and do not save config on the client side
 * 5. create auth where it will be added
 * 6. export auth from the init file
 * 7. in the console authentication > started > enable Google Provider
 * 8. export app from the firebase.config.js file export default app
 * 9. login,jsx import { getAuth } from "firebase/auth
 * 10. const auth = getAuth(app);
 * 11. imput googleAuthProviter and create a new proviter
 * 12. use sinInWithPopup pass auth and provider
 * 13. activate singIn method (google, facebook,email etc)
 */