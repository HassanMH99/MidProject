import { useState } from "react";
import { Link } from "react-router-dom";
import {
    filterProgramsByDifficulty,
    useFetchPrograms,
  } from "../../hooks/useFirebase";
  import './intermediate.css'
  export function IntermediateProgram() {
    const programs = useFetchPrograms();
 
    const IntermediatePrograms = filterProgramsByDifficulty(programs, "Intermediate");
    if (!IntermediatePrograms) {
      return <div>Loading...</div>;
    }
    return (
      <div className="programs-container">
        <h2 className="programs-header">Intermediate Programs</h2>
        <div className="programs-list">
          {IntermediatePrograms.length > 0 ? (
            IntermediatePrograms.map((program, index) => (
              <div key={index} className="program-item">
                <h3 className="program-title">{program.name}</h3>
                <p className="program-description">{program.description}</p>
                <Link to={`/intermediate-programs/${program.id}`}>View Details</Link>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
  