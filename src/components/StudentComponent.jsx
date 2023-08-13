import { useState } from "react";

export default function StudentComponent({ student }) {
    const [notes, setNotes] = useState([]);
    const [showNotes, setShowNotes] = useState(false);
    const [showMore, setShowMore] = useState (false);
    const [comment, setComment] = useState("");
    const [typer, setTyper] = useState("");
    
    
    function controlShowNotes() {
        setShowNotes(!showNotes)
    }
    
    function controlShowMore() {
        setShowMore(!showMore)
    }



    function getTrack(student) {
        if (student.codewars.current.total > 600 &&
            student.certifications.resume &&
            student.certifications.linkedin &&
            student.certifications.github &&
            student.certifications.mockInterview === true)
        {
            return <>On Track to Graduate</>
        }
    }
    function processCertification(student, certificationType) {
        if (student.certifications[certificationType] == false) {
            return "❌";
        }
         else {
            return "✅";
        }
    }

    function goalPercentage() {
        return Math.floor((student.codewars.current.total / student.codewars.goal.total) *100);
    }



    const nameOfStudent = `${student.names.preferredName} ${student.names.middleName} 
    ${student.names.surname}`;

    function getInfo(student) {
        return (
            <>
                <div>
                    <h3>CodeWars:</h3>
                    <p>Current Total: {student.codewars.current.total}</p> 
                    <p>Last Week: {student.codewars.current.lastWeek} </p> 
                    <p>Goal: {student.codewars.goal.total} </p>
                    <p>Percent of Goal Acheived: {goalPercentage(student)}%</p>
                </div>
                <div>
                    <h3>Scores</h3>
                    <p>Assignments: {student.cohort.scores.assignments * 100}% </p>
                    <p>Projects: {student.cohort.scores.projects * 100 }% </p>
                    <p>Assessments: {student.cohort.scores.assessments * 100}% </p>
                </div>
                <div>
                    <h3>Certifications:</h3>
                    <p>Resume: {processCertification(student, "resume")}</p>
                    <p>LinkedIn: {processCertification(student, "linkedin")} </p>
                    <p>Mock Interview: {processCertification(student, "mockInterview")} </p>
                    <p> Github: {processCertification(student, "github")}</p>
                </div>
            </>
        )
    }

    const noteObtainer = notes.filter((note) =>  note.id === id);
    
    function notesController() {
        return (
            <>
                <form onSubmit={submitHandler} className="notesInput">
                    <label htmlFor="id">Commenter Name </label>
                    <input type="text" 
                    id="id"
                    value={typer}
                    onChange={(e) => setTyper(e.target.value)}></input>
                    <br></br>
                    <label htmlFor="comment">Comment </label>
                    <input type="text" 
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}></input>
                    <br></br>
                    <button>Add Note</button>
                </form>
                {noteObtainer.map((note, index) => {
                    <div className="comments">
                        <>
                        {note.typer} says {note.comment}
                        </>
                    </div>
                })}
            </>
        )
    }
    
    function submitHandler(e) {
        e.preventDefault();
        const newNote = {
            id: id, 
            typer: typer,
            comment: comment,
        };
        setNotes([...notes, newNote]);
        setTyper("")
        setComment("")
    };
    
    
    return(
        <div className="student" key= {student.id}>
            <img src={student.profilePhoto} alt="student" />
            <h2>{nameOfStudent}</h2>
            <div style=
                {{color : "green"}}>{getTrack(student)}
            </div>
            <article>{student.username}</article>
            <br></br>
            <article>Birthday: {student.dob}</article>
            <br></br>
            <span onClick={controlShowMore}>{!showMore ? "ShowMore..." : "Show less..."}</span>
            {showMore ? (
                <>
                {getInfo(student)} <br></br>
                <span onClick={controlShowNotes}>
                    {!showNotes ? "1-on-1 Notes" : "Hide 1-on-1 Notes"}
                </span>
                {showNotes ? <>{notesController(student)}</> : null}
                </>
            ) : null}       
            
        </div>
    )
}
