import {
    filterProgramsByDifficulty,
    useFetchPrograms,
  } from "../hooks/useFirebase";
  import './Trainer.css'
  export function BeginnerProgram() {
    const programs = useFetchPrograms();
    const BeginnerPrograms = filterProgramsByDifficulty(programs, "Beginner");
    if (!BeginnerPrograms) {
      return <div>Loading...</div>;
    }
    return (
      <div className="programs-container">
      <h2 className="programs-header">Beginner Programs</h2>
      <div className="programs-list">
        {BeginnerPrograms.length > 0 ? (
          BeginnerPrograms.map((program) => (
            <div key={program.id} className="program-item">
              <h3 className="program-title">{program.name}</h3>
              <p className="program-description">{program.description}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
    );
  }
  