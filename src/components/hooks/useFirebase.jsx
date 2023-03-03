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