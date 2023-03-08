import {
    filterProgramsByDifficulty,
    useFetchPrograms,
  } from "../hooks/useFirebase";
  import '../Trainer/Intermediate/ProgramInfos.css'
  import { Link } from "react-router-dom";
  export function BeginnerProgram() {
    const programs = useFetchPrograms();
    const BeginnerPrograms = filterProgramsByDifficulty(programs, "Beginner");
    if (!BeginnerPrograms) {
      return <div>Loading...</div>;
    }
    const OnBack = ()=>{
      window.location.href='/trainer'
    }
    return (
      <div className="Programs-container">
        <div className="Programs-nav">
          <h2 className="Programs-header">Beginner Programs</h2>
        </div>
        <div className="Programs-list">
          {BeginnerPrograms.length > 0 ? (
            BeginnerPrograms.map((program, index) => (
              <div key={index} className="Program-item">
                <h3 className="Program-title">{program.name}</h3>
                <p className="Program-description">{program.description}</p>
                <div className="Programs-button">
                  <Link to={`/beginner-programs/${program.id}`}>View Details</Link>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <button onClick={OnBack} className="Programs-back">Back</button>
      </div>
    );
  }
  