import { useState } from "react";
import { Link } from "react-router-dom";
import {
    filterProgramsByDifficulty,
    useFetchPrograms,
  } from "../../hooks/useFirebase";
  import './ProgramInfos.css'
  export function IntermediateProgram() {
    const programs = useFetchPrograms();
 
    const IntermediatePrograms = filterProgramsByDifficulty(programs, "Intermediate");
    if (!IntermediatePrograms) {
      return <div>Loading...</div>;
    }
    const OnBack = ()=>{
      window.location.href='/trainer'
    }
    return (
      <div className="Programs-container">
        <div className="Programs-nav">
          <h2 className="Programs-header">Intermediate Programs</h2>
        </div>
        <div className="Programs-list">
          {IntermediatePrograms.length > 0 ? (
            IntermediatePrograms.map((program, index) => (
              <div key={index} className="Program-item">
                <h3 className="Program-title">{program.name}</h3>
                <p className="Program-description">{program.description}</p>
                <div className="Programs-button">
                  <Link to={`/intermediate-programs/${program.id}`}>View Details</Link>
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
  