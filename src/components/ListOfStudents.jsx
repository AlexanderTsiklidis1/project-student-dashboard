import StudentComponent from "./StudentComponent";

export default function ListOfStudents({ currentCohort, studentsTitle}) {
    return (
        <div className="listOfStudents">
            <div className="studentsTitle">
                <h2>{studentsTitle}</h2>
                Total Students: {currentCohort.length}
            </div>
            {currentCohort.map((student) => {
                return <StudentComponent key={student.id} student={student} />
            })};
        </div>
    )
}