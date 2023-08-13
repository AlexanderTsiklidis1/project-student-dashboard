import StudentComponent from "./StudentComponent";

export default function ListOfStudents({ class, classTitle}) {
    return (
        <div className="listOfStudents">
            <h1>{classTitle}</h1>
            <div className ="totalStudents">
                Total Students: {classTitle.Length}
            </div>
            {classTitle.map((student) => {
                return <StudentComponent key={student.id} student={student} />
            })};
        </div>
    )
}