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
                exercise.description,
                exercise.image
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
                e.target.value,
                exercise.image,
                
              )
            }
          />
        </label>
        <br />
        <label>
          Exercise Image
          <input
            type="text"
            className="form-input"
            value={exercise.image}
            onChange={(e) =>
              onExerciseChange(
                index,
                exercise.name,
                exercise.description,
                e.target.value,
              )
            }
          />
        </label>
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