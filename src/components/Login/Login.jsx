import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../Firebase/Firebase";
import "./Login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Sign in user with email and password
      await signInWithEmailAndPassword(auth, email, password);

      // Check user type and update state
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length > 0) {
        const user = querySnapshot.docs[0].data();
        setUserType(user.userType);
        setIsLoggedIn(true);
      } else {
        console.log("User not found");
        alert("user Not Found")
      }

      // Clear form fields
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = () => {
    window.location.href = "/register";
  };

  if (isLoggedIn) {
    if (userType === "coach") {
      window.location.href = "/coach"
    } else {
      window.location.href = "/trainer"
    }
  } else {
    return (
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSignIn}>
          <div className="login-div">
            <h2>Welcome To Workout Website</h2>
          </div>
          <label htmlFor="">Email</label>
          <input
             required
            className="login-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <label htmlFor="">Passowrd</label>
          <input
          required
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button className="login-button" type="submit">
            Sign in
          </button>
          <button
            className="register-button"
            type="button"
            onClick={handleRegister}
          >
            New here? Register
          </button>
        </form>
      </div>
    );
  }
}
