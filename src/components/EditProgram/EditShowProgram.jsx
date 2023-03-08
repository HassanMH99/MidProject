import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFetchProgram } from "../hooks/useFirebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { GeneralEdit } from "./GeneralEdit";
import { DayEdit } from "./DayEdit";
import './EditProgramDetails.css'

export function EditShowProgram() {
  const id = useParams().id;
  const program = useFetchProgram(id);
  const [editedProgram, setEditedProgram] = useState(null);

  useEffect(() => {
    if (program) {
      setEditedProgram(program);
    }
  }, [program]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProgram((prevProgram) => ({
      ...prevProgram,
      [name]: value,
    }));
  };

  const handleDayNameChange = (index, newName) => {
    setEditedProgram((prevProgram) => {
      const newDays = [...prevProgram.days];
      newDays[index] = { ...newDays[index], dayName: newName };
      return { ...prevProgram, days: newDays };
    });
  };

  const handleExerciseChange = (
    dayIndex,
    exerciseIndex,
    newName,
    newDescription
  ) => {
    setEditedProgram((prevProgram) => {
      const newDays = [...prevProgram.days];
      const newExercises = [...newDays[dayIndex].exercises];
      newExercises[exerciseIndex] = {
        name: newName,
        description: newDescription,
      };
      newDays[dayIndex] = { ...newDays[dayIndex], exercises: newExercises };
      return { ...prevProgram, days: newDays };
    });
  };

  const handleSaveChanges = async () => {
    try {
      const programDoc = doc(db, "programs", id);
      await setDoc(programDoc, editedProgram);
      window.location.href = "/edit-program";
    } catch (error) {
      console.error(error);
    }
  };

  if (!program || !editedProgram) {
    return <div>Loading...</div>;
  }
  const OnBack = ()=>{
    window.history.back();
  }
  return (
    <div className="Program-Edit-container">
      <div className="Program-Edit-nav"><h1>Edit Program</h1>
      <button onClick={OnBack} className="Program-Edit-button">Back</button></div>
      <div className="Program-Edit">
        <GeneralEdit editedProgram={editedProgram} handleInputChange={handleInputChange} />
        <div className="Program-days-Edit">
          {editedProgram.days.map((day, dayIndex) => (
            <DayEdit
              key={dayIndex}
              dayIndex={dayIndex}
              day={day}
              handleDayNameChange={handleDayNameChange}
              handleExerciseChange={handleExerciseChange}
            />
          ))}
        </div>
        <button className="Edit-Button" onClick={handleSaveChanges}>Save Changes</button>
      </div>
    </div>
  );
}
