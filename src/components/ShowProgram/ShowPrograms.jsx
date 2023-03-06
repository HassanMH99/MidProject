import { useFetchPrograms } from "../hooks/useFirebase";
import { Link } from "react-router-dom";
import './ShowPrograms.css'
export function ShowPrograms() {
  const programs = useFetchPrograms();
  const OnBack = ()=>{
    window.location.href="/coach"
  }
  return (
    <div className="ShowProducts">
      <div className="ShowProducts-nav">
        <h2>Programs</h2>
        <button onClick={OnBack} className="ShowProducts-button1">Back</button>
      </div>
      <div className="ShowProducts-programList">
        {programs.map((program) => (
          <div  key={program.id} className="ShowProducts-programList1">
            <h3>{program.name}</h3>
            <p>{program.description}</p>
            <p>{program.dificulty_level}</p>
            <Link to={`/show-program/${program.id}`}>
              <button className="ShowProducts-button">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
