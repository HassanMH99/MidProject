import './AddProgram.css'
export function General(){
    const HandleBack =()=>{
        window.location.href='/'
      }
  return (
    <>
     <h2 className="form-title">Add Program</h2>
      <div className="back">
          <button onClick={HandleBack} type="submit" className="submit-button">
            Back
          </button>
        </div></>
  );
}