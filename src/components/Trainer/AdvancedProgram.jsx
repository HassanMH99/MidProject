import {
  filterProgramsByDifficulty,
  useFetchPrograms,
} from "../hooks/useFirebase";
import './Trainer.css'
export function AdvancedProgram() {
  const programs = useFetchPrograms();
  const AdvancedPrograms = filterProgramsByDifficulty(programs, "Advanced");
  if (!AdvancedPrograms) {
    return <div>Loading...</div>;
  }
  return (
    <div className="programs-container">
    <h2 className="programs-header">Advanced Programs</h2>
    <div className="programs-list">
      {AdvancedPrograms.length > 0 ? (
        AdvancedPrograms.map((program) => (
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
