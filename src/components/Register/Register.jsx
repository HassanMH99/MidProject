import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../Firebase/Firebase";
export function Register(){
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Create user account with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Add user data to Firestore
      const userDocRef = await addDoc(collection(db, "users"), {
        name,
        email,
        userType,
        uid: user.uid,
      });

      console.log("User created successfully");
             setName("");
            setEmail("");
            setPassword("");
            setUserType("");
            window.location.href="/login"
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="">Select user type</option>
        <option value="coach">Coach</option>
        <option value="trainer">Trainer</option>
      </select>
      <button type="submit">Sign up</button>
    </form>
  );
  
}