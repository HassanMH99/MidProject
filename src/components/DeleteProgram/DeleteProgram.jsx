import { useState } from "react";
import { useFetchPrograms } from "../hooks/useFirebase";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";


export function DeleteProgram() {
  const programs = useFetchPrograms();
  const [showPopup, setShowPopup] = useState(false);

  const deleteProgram = async (id) => {
    try {
      const programRef = doc(db, "programs", id);
      await deleteDoc(programRef);
      console.log("Program deleted successfully!");
      window.location.reload(); // Refresh the page after deleting the program
    } catch (error) {
      console.error("Error deleting program: ", error);
    }
  };

  return (
    <div className="ShowProducts">
      <h2>Programs</h2>
      <div className="ShowProducts-programList">
        {programs.map((program) => (
          <div key={program.id} className="ShowProducts-programList">
            <h3>{program.name}</h3>
            <p>{program.description}</p>
            <p>{program.dificulty_level}</p>
            <button onClick={() => setShowPopup(true)}>Delete Program</button>
            {showPopup && (
              <div className="popup">
                <div className="popup-content">
                  <p>Are you sure you want to delete this program?</p>
                  <button onClick={() => deleteProgram(program.id)}>Yes</button>
                  <button onClick={() => setShowPopup(false)}>No</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
