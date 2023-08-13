import { useState } from "react";
import data from "./data/data.json";
import classList from "./components/ClassList";
import ListOfStudents from "./components/ListOfStudents";




function App() {
  const [students, setStudents] = useState(data);
  const [currentCohort, setCurrentCohort] = useState([...students]);
  const [cohorts, setCohorts] = useState(["All Students"]);
  const [studentsTitle, setStudentsTitle] = useState("All Students");
    return (
    <div>
      <h1>Student Dashboard</h1>
    </div>
  );
}

export default App;
