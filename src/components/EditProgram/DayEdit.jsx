import React from "react";
import { ExerciseEdit } from "./ExersiceEdit";

export function DayEdit({ dayIndex, day, handleDayNameChange, handleExerciseChange }) {
  return (
    <div key={dayIndex} className="program-day">
      <div className="day-title">
        <input
          type="text"
          value={day.dayName}
          onChange={(event) => handleDayNameChange(dayIndex, event.target.value)}
        />
      </div>
      {day.exercises.map((exercise, exerciseIndex) => (
        <ExerciseEdit
          key={exerciseIndex}
          dayIndex={dayIndex}
          exerciseIndex={exerciseIndex}
          exercise={exercise}
          handleExerciseChange={handleExerciseChange}
          />
          ))}
          </div>
          );
          }
