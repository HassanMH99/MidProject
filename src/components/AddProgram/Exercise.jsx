import React from "react";
import './AddProgram.css'
export function Exercise({ exercise, index, onExerciseChange,onDeleteExercise }) {
    return (
      <div className="exercise-section" key={index}>
        <h4 className="exercise-title">Exercise {index + 1}</h4>
        <label>
          Exercise Name
          <input
            type="text"
            className="form-input"
            required
            value={exercise.name}
            onChange={(e) =>
              onExerciseChange(
                index,
                e.target.value,
                exercise.description
              )
            }
          />
        </label>
        <br />
        <label>
          Exercise Description
          <textarea
            className="form-input"
            required
            value={exercise.description}
            onChange={(e) =>
              onExerciseChange(
                index,
                exercise.name,
                e.target.value
              )
            }
          />
        </label>
        <br />
        <div className="button-wrapper">
        <button
          type="button"
          className="add-exercise-button"
          onClick={() => onDeleteExercise(index)}
        >
          Delete Exercise
        </button>
        </div>
      </div>
    );
  }