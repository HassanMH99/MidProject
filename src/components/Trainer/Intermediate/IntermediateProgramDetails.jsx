import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProgramById } from "../../hooks/useFirebase";
import { DayProgram } from "./DayProgram";
import "./intermediate.css";

export function IntermediateProgramDetails() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
  const [activeDay, setActiveDay] = useState(null);
  const [completedExercises, setCompletedExercises] = useState({});

  useEffect(() => {
    async function fetchProgram() {
      const inter = await getProgramById(id);
      setProgram(inter);
      // initialize the completedExercises state variable with an empty object for each day
      const initialCompletedExercises = {};
      inter.days.forEach((day) => {
        initialCompletedExercises[day.id] = {};
      });
      setCompletedExercises(initialCompletedExercises);
    }
    fetchProgram();
  }, [id]);

  if (!program) {
    return <div>Loading...</div>;
  }

  function handleExerciseCompletion(dayId, dayIndex, exerciseIndex) {
    setCompletedExercises((prevCompletedExercises) => {
      const newCompletedExercises = { ...prevCompletedExercises };
      if (!newCompletedExercises[dayId]) {
        newCompletedExercises[dayId] = {};
      }
      if (!newCompletedExercises[dayId][dayIndex]) {
        newCompletedExercises[dayId][dayIndex] = [];
      }
      if (!newCompletedExercises[dayId][dayIndex].includes(exerciseIndex)) {
        newCompletedExercises[dayId][dayIndex].push(exerciseIndex);
      }
      return newCompletedExercises;
    });
  }

  return (
    <div className="program-details-container">
      <h2 className="program-details-header">{program.name}</h2>
      <p className="program-details-description">{program.description}</p>
      <div className="days-list">
        {program.days.map((day, dayIndex) => {
          const dayId = day.id;
          const allExercisesCompleted =
            completedExercises[dayId] &&
            completedExercises[dayId][dayIndex] &&
            completedExercises[dayId][dayIndex].length === day.exercises.length;
          return (
            <button
              key={day.id}
              className={`program-details-button ${
                allExercisesCompleted ? "completed" : ""
              }`}
              onClick={() => setActiveDay(day)}
            >
              {`Day ${dayIndex + 1}`}
            </button>
          );
        })}
      </div>
      {activeDay && (
        <DayProgram
          day={activeDay}
          dayIndex={program.days.indexOf(activeDay)}
          onExerciseCompletion={(exerciseIndex) =>
            handleExerciseCompletion(activeDay.id, program.days.indexOf(activeDay), exerciseIndex)
          }
          completedExercises={
            completedExercises[activeDay.id] && completedExercises[activeDay.id][program.days.indexOf(activeDay)] || []
          }
        />
      )}
    </div>
  );
}
