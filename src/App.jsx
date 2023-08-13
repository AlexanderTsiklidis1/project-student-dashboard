import { useState } from "react";
import data from "./data/data.json";
import ClassList from "./components/ClassList";
import ListOfStudents from "./components/ListOfStudents";
import "./App.css";




function App() {
  
  console.log("script is connected")
  const [students, setStudents] = useState(data);
  const [currentCohort, setCurrentCohort] = useState([...students]);
  const [studentsTitle, setStudentsTitle] = useState("All Students");
  const [cohorts, setCohorts] = useState(["All Students"]);

  students.forEach((cohort) => {
    if (!cohorts.find((cohortYear) => cohortYear == cohort.cohort.cohortCode)
    ) {
        cohorts.push(cohort.cohort.cohortCode);
      }
  });

  function filteredClasses([cohort]) {
    if (cohort) {
      const filiteredList = students.filter((student) => student.cohort.cohortCode == cohort);
      setCurrentCohort([...filiteredList]);
      setStudentsTitle(cohort);
    }
    if (cohort == "All Students") {
      setCurrentCohort([...students]);
      setStudentsTitle("All Students");
    }
  }
  
cohorts.sort();

return (
    <div className="skeleton">
      <header>Student Dashboard</header>
      <ClassList cohorts={cohorts} filteredClasses={filteredClasses} />
      <ListOfStudents currentCohort={currentCohort}
        students={students}
        studentsTitle={studentsTitle}
      />
      
    </div>
  );
}

export default App;
