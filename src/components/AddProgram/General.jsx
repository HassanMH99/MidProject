import './AddProgram.css'
export function General(){
  const OnBack = ()=>{
    window.location.href="/coach"
  }
  return (
    <>
     <h2 className="form-title">Add Program</h2>
      <div className="back">
          <button onClick={OnBack} type="submit" className="submit-button">
            Back
          </button>
        </div></>
  );
}