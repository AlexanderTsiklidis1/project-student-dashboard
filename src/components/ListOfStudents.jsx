import StudentComponent from "./StudentComponent";

export default function ListOfStudents({ currentCohort, studentsTitle}) {
    return (
        <div className="listOfStudents">
            <h1>{studentsTitle}</h1>
            <div className ="totalStudents">
                Total Students: {currentCohort.length}
            </div>
            {currentCohort.map((student) => {
                return <StudentComponent key={student.id} student={student} />
            })};
        </div>
    )
}