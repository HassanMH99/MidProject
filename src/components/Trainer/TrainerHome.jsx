import { useState, useEffect } from "react";
import { db,auth } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
import {  onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import './Trainer.css'
export function TrainerHome() {
  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       try {
  //         const userDocRef = doc(db, "users", user.uid);
  //         const userDoc = await getDoc(userDocRef);
  //         if (userDoc.exists()) {
  //           setUserName(userDoc.data().name);
  //         } else {
  //           console.log("User document not found");
  //         }
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   });
  // }, []);
  const OnBack = ()=>{
    window.location.href='/login'
  }
  return (
    <div className="TrainerHome">
      <div onClick={OnBack} className="TrainerHome-nav">
        <h1>Welcome To My Website Workout </h1>
        <button className="TrainerHome-button">Logout</button>
      </div >
      <div className="TrainerHome-h2">
        <h2>Check your Type To Start Your Program</h2>
      </div>
      <div className="TrainerHome-links">
        <div className="Link">
          <Link to="/beginner-programs">Beginner Programs</Link>
        </div>
        <div className="Link">
          <Link to="/intermediate-programs">Intermediate Programs</Link>
          </div>
          <div className="Link">
        <Link to="/advanced-programs">Advanced Programs</Link>
      </div>
      </div>
      <div className="TrainerHome-Description">
        <h2>About Our Website</h2>
        <h3>Welcome to our workout website! We provide a variety of fitness programs and exercises designed to help you achieve your health and fitness goals. Whether you're a beginner or an experienced athlete, our programs are tailored to your level of fitness and experience. Our team of experienced trainers and coaches are here to guide you every step of the way, offering tips and advice to help you maximize your results. Our website features easy-to-use navigation and a user-friendly interface, making it easy for you to find the programs and exercises that best suit your needs. So, join us today and start your journey towards a healthier, fitter you!</h3>
      </div>
    </div>
  );
}
