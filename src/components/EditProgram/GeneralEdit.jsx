
export function GeneralEdit({ editedProgram,handleDayNameChange,handleExerciseChange, handleInputChange, handleSaveChanges }) {
    return (
    <div className="program-details-container">
    <div className="program-details">
    <h2>
    <input
             type="text"
             name="name"
             value={editedProgram.name}
             onChange={handleInputChange}
           />
    </h2>
    <p>
    <textarea
             name="description"
             value={editedProgram.description}
             onChange={handleInputChange}
           />
    </p>
    <p>
    <input
             type="text"
             name="difficulty_level"
             value={editedProgram.dificulty_level}
             onChange={handleInputChange}
           />
    </p>
  
    </div>
    </div>
    );
    }