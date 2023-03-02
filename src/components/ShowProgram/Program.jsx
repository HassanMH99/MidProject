import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

export function Program(props) {
  const [program, setProgram] = useState(null);
  const { id } = props.match.params;
  useEffect(() => {
    const fetchProgram = async () => {
      const programId = props.match.params.id;
      const programsRef = collection(db, "programs");
      const programSnapshot = await getDocs(programsRef);

      programSnapshot.forEach((doc) => {
        if (doc.id === programId) {
          setProgram({ id: doc.id, ...doc.data() });
        }
      });
    };

    fetchProgram();
  }, [props.match.params.id]);

  if (!program) {
    return <div>Loading...</div>;
  }

  return (
    <div className="program-details">
      <h2>{program.name}</h2>
      <p>{program.description}</p>
      <p>Difficulty Level: {program.difficulty_level}</p>
      <h3>Days</h3>
      {program.days.map((day, index) => (
        <div key={index}>
          <h4>{day.dayName}</h4>
          <ul>
            {day.exercises.map((exercise, index) => (
              <li key={index}>
                <h5>{exercise.name}</h5>
                <p>{exercise.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
