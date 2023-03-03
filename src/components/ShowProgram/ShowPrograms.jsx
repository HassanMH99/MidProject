import { useFetchPrograms } from "../hooks/useFirebase";
import { Link } from "react-router-dom";
import './ShowPrograms.css'
export function ShowPrograms() {
  const programs = useFetchPrograms();

  return (
    <div className="ShowProducts">
      <h2>Programs</h2>
      <div className="ShowProducts-programList">
        {programs.map((program) => (
          <div  key={program.id} className="ShowProducts-programList">
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
