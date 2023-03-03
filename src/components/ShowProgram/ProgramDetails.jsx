import {useParams} from 'react-router-dom'
import { useFetchProgram } from "../hooks/useFirebase";
import './ProgramDetails.css'

export function ProgramDetails() {
  const  id  = useParams().id;
  const program = useFetchProgram(id);

  if (!program) {
    return <div>Loading...</div>;
  }

  return (
    <div className="program-details-container">
      <div className="program-details">
        <h2>{program.name}</h2>
        <p>{program.description}</p>
        <p>{program.dificulty_level}</p>
        <div className="program-days">
          {program.days.map((day, index) => (
            <div key={index} className="program-day">
              <div className='day-title'>{day.dayName}</div>
              {day.exercises.map((exercise, index) => (
                <div key={index} className="program-exercise">
                  <p>{exercise.name}</p>
                  <p>{exercise.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

