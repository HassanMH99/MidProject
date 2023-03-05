import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../Firebase/Firebase";
export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignIn = async (e) => {
        e.preventDefault();
    
        try {
          // Sign in user with email and password
          await signInWithEmailAndPassword(auth, email, password);
    
          // Check user type and redirect to the appropriate page
          const usersRef = collection(db, "users");
          const q = query(usersRef, where("email", "==", email));
          const querySnapshot = await getDocs(q);
    
          if (querySnapshot.docs.length > 0) {
            const user = querySnapshot.docs[0].data();
            if (user.userType === "coach") {
              window.location.href="/coach";
            } else {
                window.location.href="/trainer";
            }
          } else {
            console.log("User not found");
          }
    
          // Clear form fields
          setEmail("");
          setPassword("");
        } catch (error) {
          console.error(error);
        }
      };
    
      const handleRegister = () => {
        window.location.href="/register";
      };
    
      return (
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Sign in</button>
          <button type="button" onClick={handleRegister}>
            Register
          </button>
        </form>
      );
}