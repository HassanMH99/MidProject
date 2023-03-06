import { useState, useEffect } from "react";
import { useFetchPrograms } from "../hooks/useFirebase";
import { collection, getDocs } from "firebase/firestore";
import { db,auth } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export function TrainerHome() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUserName(userDoc.data().name);
          } else {
            console.log("User document not found");
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  }, []);

  return (
    <div>
      <h1>Welcome Trainer {userName}!</h1>
      <Link to="/beginner-programs">Beginner Programs</Link>
      <Link to="/intermediate-programs">Intermediate Programs</Link>
      <Link to="/advanced-programs">Advanced Programs</Link>
    </div>
  );
}
