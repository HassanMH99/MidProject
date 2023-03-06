import { useState, useEffect } from 'react';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import {db} from '../../Firebase/Firebase'
//fetch one program
export const useFetchProgram = (id) => {
    const [program, setProgram] = useState(null);
    useEffect(() => {
      const fetchProgram = async () => {
        const programRef = doc(db, "programs", id);
        const programSnapshot = await getDoc(programRef);
        if (programSnapshot.exists()) {
          setProgram({ id: programSnapshot.id, ...programSnapshot.data() });
        } else {
          console.log("No such document!");
        }
      };
      fetchProgram();
    }, [id]);
  
    return program;
  };
  export function filterProgramsByDifficulty(programs, difficulty) {
    return programs.filter((program) => program.dificulty_level === difficulty);
  }

  //Fetch all Programs
  export const useFetchPrograms = () => {
    const [programs, setPrograms] = useState([]);
  
    useEffect(() => {
      const fetchPrograms = async () => {
        const programsCollection = collection(db, "programs");
        const programsSnapshot = await getDocs(programsCollection);
        const programsList = programsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPrograms(programsList);
      };
      fetchPrograms();
    }, []);
  
    return programs;
  };



  export async function getProgramById(id) {
    const programRef = doc(db, "programs", id);
    const programSnapshot = await getDoc(programRef);
    if (programSnapshot.exists()) {
      return { id: programSnapshot.id, ...programSnapshot.data() };
    } else {
      console.log("No such program document!");
      return null;
    }
  }


