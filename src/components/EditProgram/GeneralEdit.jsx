export function GeneralEdit({ editedProgram, handleInputChange }) {
  return (
    <div className="Program-Edit-container">
      <div className="Program-Edit-Div">
        <label className="Program-Edit-Label" htmlFor="">Name</label>
        <input
        className="Program-Edit-Input"
          type="text"
          name="name"
          value={editedProgram.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="Program-Edit-Div">
        <label className="Program-Edit-Label" htmlFor="">Description</label>
        <textarea className="Program-Edit-TextArea"
          name="description"
          value={editedProgram.description}
          onChange={handleInputChange}
        />
      </div>

      <div className="Program-Edit-Div">
        <label className="Program-Edit-Label" htmlFor="">Difficulty Level</label>
        <input
        className="Program-Edit-Input"
          type="text"
          name="difficulty_level"
          value={editedProgram.dificulty_level}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
