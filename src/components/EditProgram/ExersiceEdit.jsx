export function ExerciseEdit({
  dayIndex,
  exerciseIndex,
  exercise,
  handleExerciseChange,
}) {
  return (
    <div key={exerciseIndex} className="Program-Edit-exercise">
        <div className="Program-Edit-Div">
          <h1>{"Exersise"+" "+(exerciseIndex+1)}</h1>
          <label htmlFor="">Name</label>
          <input
          style={{width:"40%"}}
          className="Program-Edit-Input"
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
        </div>
      
      <div className="Program-Edit-Div">
        <label htmlFor="">Description</label>
        <textarea
         style={{width:"40"}}
        className="Program-Edit-TextArea"
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
      </div>
    </div>
  );
}
