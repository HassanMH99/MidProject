import React, { useState } from "react";
import "./intermediate.css";

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
    <div className="day-program">
      <h3 className="day-title">{`${day.dayName}`}</h3>
      <div className="exercise-list">
        {day.exercises.map((exercise, exerciseIndex) => (
          <div key={exerciseIndex} className="exercise-item">
            <h1>{"Exercise" + " " + (exerciseIndex + 1)}</h1>
            <h4 className="exercise-title">{exercise.name}</h4>
            <p className="exercise-description">{exercise.description}</p>
            <button
              className={`exercise-button ${completed.includes(`${dayIndex}-${exerciseIndex}`) ? "completed" : ""}`}
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
