import React, { useState } from "react";
import "./ProgramDetailsinfo.css";

export function DayProgram({ day, dayIndex, onExerciseCompletion, completedExercises }) {
  const [completed, setCompleted] = useState(completedExercises);

  const toggleExerciseCompletion = (exerciseIndex) => {
    const exerciseId = `${dayIndex}-${exerciseIndex}`;
    const newCompleted = completed.includes(exerciseId)
      ? completed.filter((id) => id !== exerciseId)
      : [...completed, exerciseId];
    setCompleted(newCompleted);
    onExerciseCompletion(dayIndex, exerciseIndex, newCompleted);
  };

  return (
    <div className="Day-program">
      <div className="Day-title-div">
        <h3 className="Day-title">{`${day.dayName}`}</h3>
      </div>
      <div className="Exercise-list">
        {day.exercises.map((exercise, exerciseIndex) => (
          <div key={exerciseIndex} className="Exercise-item">
            <h1>{"Exercise" + " " + (exerciseIndex + 1)}</h1>
            <h4 className="Exercise-title">{exercise.name}</h4>
            <p className="Exercise-description">{exercise.description}</p>
            <button
              className={`Exercise-button ${completed.includes(`${dayIndex}-${exerciseIndex}`) ? "completed" : ""}`}
              onClick={() => toggleExerciseCompletion(exerciseIndex)}
            >
              {completed.includes(`${dayIndex}-${exerciseIndex}`) ? "Completed" : "Mark as Done"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
