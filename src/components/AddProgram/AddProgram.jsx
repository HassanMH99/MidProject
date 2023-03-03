import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import "./AddProgram.css";
import { Day } from "./Day";
import { General } from "./General";
export function AddProgram() {
  const [programName, setProgramName] = useState("");
  const [programDesc, setProgramDesc] = useState("");
  const [level, setlevel] = useState("");
  const [days, setDays] = useState([{ dayName: "", exercises: [] }]);

  const handleAddProgram = async (e) => {
    e.preventDefault();
    // add program to Firestore
    const docRef = await addDoc(collection(db, "programs"), {
      name: programName,
      description: programDesc,
      dificulty_level: level,
      days: days,
    });

    console.log("Program added with ID: ", docRef.id);
    setProgramName("");
    setProgramDesc("");
    setlevel("");
    setDays([{ dayName: "", exercises: [] }]);
  };

  const handleAddDay = () => {
    if (days.length < 7) {
    setDays([...days, { dayName: "", exercises: [] }]);}
  };

  const handleDayNameChange = (index, dayName) => {
    const updatedDays = [...days];
    updatedDays[index].dayName = dayName;
    setDays(updatedDays);
  };
  const handleDeleteDay = (index) => {
    const updatedDays = [...days];
    updatedDays.splice(index, 1);
    setDays(updatedDays);
  };
  const handleDeleteExercise = (dayIndex, exerciseIndex) => {
    const updatedDays = [...days];
    updatedDays[dayIndex].exercises.splice(exerciseIndex, 1);
    setDays(updatedDays);
  };
  
  const handleAddExercise = (index) => {
     
    const updatedDays = [...days];
    if(updatedDays[index].exercises.length<10){
    updatedDays[index].exercises.push({ name: "", description: "" });
    setDays(updatedDays);
    }
  };

  const handleExerciseChange = (dayIndex, exerciseIndex, name, description) => {
   
    const updatedDays = [...days];

    updatedDays[dayIndex].exercises[exerciseIndex].name = name;
    updatedDays[dayIndex].exercises[exerciseIndex].description = description;
    setDays(updatedDays);}
 

  return (
    <div className="program-form">
        <General/>
      <form onSubmit={handleAddProgram}>
        <label>
          Program Name
          <input
            type="text"
            required
            className="form-input"
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Program Description
          <textarea
            className="form-input"
            required
            value={programDesc}
            onChange={(e) => setProgramDesc(e.target.value)}
          />
        </label>
        <br />
        <label>
          Difficulty Level
          <select
            className="form-input"
            name="Level"
            value={level}
            onChange={(e) => setlevel(e.target.value)}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>
        <br />
        {days.map((day, index) => (
          <Day
            key={index}
            index={index}
            day={day}
            onDayNameChange={handleDayNameChange}
            onExerciseChange={handleExerciseChange}
            onAddExercise={handleAddExercise}
            onDeleteDay={handleDeleteDay}
            onDeleteExercise={handleDeleteExercise}
          />
          
        ))}
        
        <div className="button-wrapper">
          <button
            type="button"
            className="add-day-button"
            onClick={handleAddDay}
          >
            Add Day
          </button>
        </div>
        <br />
        <div className="button-wrapper">
          <button type="submit" className="submit-button">
            Add Program
          </button>
        </div>
      </form>
     
    </div>
    
  );
}
