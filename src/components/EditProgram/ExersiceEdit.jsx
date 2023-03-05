export function ExerciseEdit({
  dayIndex,
  exerciseIndex,
  exercise,
  handleExerciseChange,
}) {
  return (
    <div key={exerciseIndex} className="program-exercise">
      <p>
        <input
          type="text"
          value={exercise.name}
          onChange={(event) =>
            handleExerciseChange(
              dayIndex,
              exerciseIndex,
              event.target.value,
              exercise.description
            )
          }
        />
      </p>
      <p>
        <textarea
          value={exercise.description}
          onChange={(event) =>
            handleExerciseChange(
              dayIndex,
              exerciseIndex,
              exercise.name,
              event.target.value
            )
          }
        />
      </p>
    </div>
  );
}
