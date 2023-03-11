import {useParams} from 'react-router-dom'
import { useFetchProgram } from "../hooks/useFirebase";
import './ProgramDetails.css'

export function ProgramDetails() {
  const  id  = useParams().id;
  const program = useFetchProgram(id);
  console.log(program);

  if (!program) {
    return <div>Loading...</div>;
  }
  const OnBack = ()=>{
    window.location.href="/show-program"
  }
  return (
    <div className="program-details-container">
       <div className='program-details-nav'>
          <h2>{program.name}</h2>
          <button onClick={OnBack} className='program-details-button'>Back</button>
        </div>
      <div className="program-details">
       
        <p style={{color:"#373a3a"}}>{program.description}</p>
        <p style={{color:"#373a3a"}}>{program.dificulty_level}</p>
        <div className="program-days">
          {program.days.map((day, index) => (
            <div key={index} className="program-day">
              <div className='day-title'>{day.dayName}</div>
              {day.exercises.map((exercise, index) => (
                <div key={index} className="program-exercise">
                  <p>{"Exersice"+" "+(index+1)}</p>
                  <p>{exercise.name}</p>
                  <img src={exercise.image} alt="" />
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

