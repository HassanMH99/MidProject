import { Exercise } from "./Exercise";

export function Day({ day, index, onDayNameChange, onExerciseChange, onAddExercise,onDeleteDay ,onDeleteExercise}) {
    return (
      <div className="day-section" key={index}>
        <h3 className="day-title">Day {index + 1}</h3>
        <label>
          Day Name
          <input
            type="text"
            required
            className="form-input"
            value={day.dayName}
            onChange={(e) => onDayNameChange(index, e.target.value)}
          />
        </label>
        <br />
        {day.exercises.map((exercise, exerciseIndex) => (
          <Exercise 
            key={exerciseIndex}
            exercise={exercise}
            index={exerciseIndex}
            onDeleteExercise={(exerciseIndex, name, description) =>
                onDeleteExercise(index, exerciseIndex, name, description)
              }
            onExerciseChange={(exerciseIndex, name, description) =>
              onExerciseChange(index, exerciseIndex, name, description)
            }
          />
        ))}
        <button
          type="button"
          className="add-exercise-button"
          onClick={() => onAddExercise(index)}
        >
          Add Exercise
        </button>
        <button
          type="button"
          className="add-exercise-button"
          onClick={() => onDeleteDay(index)}
        >
          Delete Day
        </button>
        <br />
      </div>
    );
  }