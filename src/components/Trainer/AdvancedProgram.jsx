import {
  filterProgramsByDifficulty,
  useFetchPrograms,
} from "../hooks/useFirebase";
 import '../Trainer/Intermediate/ProgramInfos.css'
import { Link } from "react-router-dom";
export function AdvancedProgram() {
  const programs = useFetchPrograms();
  const AdvancedPrograms = filterProgramsByDifficulty(programs, "Advanced");
  if (!AdvancedPrograms) {
    return <div>Loading...</div>;
  }
  const OnBack = ()=>{
    window.location.href='/trainer'
  }
  return (
    <div className="Programs-container">
      <div className="Programs-nav">
        <h2 className="Programs-header">Advanced Programs</h2>
      </div>
      <div className="Programs-list">
        {AdvancedPrograms.length > 0 ? (
          AdvancedPrograms.map((program, index) => (
            <div key={index} className="Program-item">
              <h3 className="Program-title">{program.name}</h3>
              <p className="Program-description">{program.description}</p>
              <div className="Programs-button">
                <Link to={`/advanced-programs/${program.id}`}>View Details</Link>
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
