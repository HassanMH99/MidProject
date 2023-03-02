import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import './ShowPrograms.css'
export function ShowPrograms() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    async function fetchPrograms() {
      const programCollection = collection(db, "programs");
      const programSnapshot = await getDocs(programCollection);
      const programList = programSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPrograms(programList);
    }
    fetchPrograms();
  }, []);

  return (
    <div className="ShowProducts">
      <nav className="ShowProducts-nav">
        <h2>All Programs</h2>
      </nav>
      <div className="ShowProducts-programList">
        {programs.map((program) => (
          <div  className="ShowProducts-programList" key={program.id}>
            <h3>{program.name}</h3>
            <p>{program.description}</p>
            <p>Difficulty level: {program.dificulty_level}</p>
            <button className="ShowProducts-button">ShowDetails</button>
          </div>
        ))}
      </div>
    </div>
  );
}
