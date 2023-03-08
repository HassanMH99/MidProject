import React from "react";
import { ExerciseEdit } from "./ExersiceEdit";

export function DayEdit({ dayIndex, day, handleDayNameChange, handleExerciseChange }) {
  return (
    <div key={dayIndex} className="Program-day-Edit">
      <div className="Day-title-Edit">
        {/* <label className="Program-Edit-Label" htmlFor="">{"Exersice"+" "+(dayIndex+1)}</label> */}
        <input className="Program-Edit-Input"
        style={{width:"100%"}}
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
