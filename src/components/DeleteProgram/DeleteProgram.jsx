import { useState } from "react";
import { useFetchPrograms } from "../hooks/useFirebase";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import '../ShowProgram/ShowPrograms.css'
import './Popup.css'

export function DeleteProgram() {
  const programs = useFetchPrograms();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const deleteProgram = async (program) => {
    try {
      const programRef = doc(db, "programs", program.id);
      await deleteDoc(programRef);
      console.log("Program deleted successfully!");
      console.log('====================================');
      console.log(programRef);
      console.log('====================================');
      window.location.reload(); // Refresh the page after deleting the program
    } catch (error) {
      console.error("Error deleting program: ", error);
    }
  };

  const OnBack = ()=>{
    window.location.href="/coach"
  }

  return (
    <div className="ShowProducts">
      <div className="ShowProducts-nav">
        <h2>Delete Programs</h2>
        <button onClick={OnBack} className="ShowProducts-button1">Back</button>
      </div>
      <div className="ShowProducts-programList">
        {programs.map((program) => (
          <div key={program.id} className="ShowProducts-programList1">
            <h3>{program.name}</h3>
            <p>{program.description}</p>
            <p>{program.dificulty_level}</p>
            <button className="ShowProducts-button" onClick={() => {
              setShowPopup(true);
              setSelectedProgram(program);
            }}>Delete Program</button>
            {showPopup && selectedProgram && selectedProgram.id === program.id && (
              <div className="popup">
                <div className="popup-content">
                  <p>Are you sure you want to delete this program?</p>
                  <button onClick={() => deleteProgram(selectedProgram)}>Yes</button>
                  <button onClick={() => {
                    setShowPopup(false);
                    setSelectedProgram(null);
                  }}>No</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
