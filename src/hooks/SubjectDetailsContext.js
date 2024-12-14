import React, { useState, useEffect } from 'react';
import { useUserDataContext } from './UserDataContext';
import { db } from '../FirebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const SubjectContext = React.createContext();

export const SubjectProvider = ({ children }) => {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [mySubjects, setMySubjects] = useState([]);
  const [myStudents, setMyStudents] = useState([]);
  const { userData } = useUserDataContext();

  useEffect(() => {
    // Load data from Firebase when userData.tutorId is available
    const loadData = async () => {
      if (userData?.tutorId) {
        try {
          // Get reference to the tutor's document
          const tutorDocRef = doc(db, "tutors", userData.tutorId);
          const tutorDoc = await getDoc(tutorDocRef);

          if (tutorDoc.exists()) {
            const data = tutorDoc.data();
            setMySubjects(data.myClasses || []); // Load 'mySubjects' array
            
            // Set the first subject as default for currentSubject
            if (data.myClasses && data.myClasses.length > 0) {
              setCurrentSubject(data.myClasses[0]); // Assuming each subject is an object
            }
          } else {
            console.error("No such document in 'tutors' collection!");
          }
        } catch (error) {
          console.error("Error loading tutor data from Firebase:", error);
        }
      }
    };

    loadData();
  }, [userData]);

  // Update myStudents when currentSubject changes
  useEffect(() => {
    if (currentSubject && currentSubject.myStudents) {
      setMyStudents(currentSubject.myStudents); // Set myStudents from currentSubject
      console.log("myStudents updated:", currentSubject.myStudents);
    }
  }, [currentSubject]); // Run this effect when currentSubject changes

  return (
    <SubjectContext.Provider
      value={{
        currentSubject,
        setCurrentSubject,
        mySubjects,
        myStudents, // Providing myStudents in context
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
};

export const useSubjectContext = () => {
  return React.useContext(SubjectContext);
};
