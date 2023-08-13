import { useState } from "react";

export default function StudentComponent({ student }) {
    const [notes, setNotes] = useState(false);
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



    const nameOfStudent = `${student.names.preferredName} ${student.names.middleName} 
    ${student.names.surname}`;

    function getInfo(student) {
        return (
            <>
                <div>
                    <h3>CodeWars:</h3>
                    Current Total: {student.codewars.current.total} <br>
                    </br>
                    Last Week: {student.codewars.current.lastWeek} <br>
                    </br> 
                    Goal: {student.codewars.goal.total} <br>
                    </br>
                    Percent of Goal Acheived: {goalPercentage(student)}%
                </div>
                <div>
                    <h3>Scores</h3>
                    Assignments: {student.cohort.scores.assignments * 100}% <br>
                    </br>
                    Projects: {student.cohort.scores.projects * 100 }% <br>
                    </br>
                    Assessments: {student.cohort.scores.assessments * 100}% <br>
                    </br>
                </div>
                <div>
                    <h3>Certifications:</h3>
                    Resume: {processCertification(student, "resume")} <br>
                    </br>
                    LinkedIn: {processCertification(student, "linkedin")} <br>
                    </br> 
                    Mock Interview: {processCertification(student, "mockInterview")} <br>
                    </br>
                    Github: {processCertification(student, "github")}%
                </div>
            </>
        )
    }

// const noteObtainer = notes.filter((note) => note.id == id);

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

    function controlNotes() {
        return (
            <>
                <form onSubmit={submitHandler} className="notesInput">
                    <label htmlFor="id">ID</label>
                    <input type="text" 
                    id="id"
                    value={typer}
                    onChange={(e) => setTyper(e.target.value)}></input>
                    <label htmlFor="comment">Comment</label>
                    <input type="text" 
                    id="comment"
                    value= {comment}
                    onChange={(e) => setComment(e.target.value)}></input>
                    <button>Submit</button>
                </form>
                {noteObtainer.map((note, index) => {
                    <div key={index}>
                        <>
                        {note.typer} says {note.comment}
                        </>
                    </div>
                })}
            </>
        )
    }
    return(
        <div className="student" key= {student.id}>
            <img src={student.profilePhoto} alt="student" />
            <h2>{nameOfStudent}</h2>
            <div style={{color: "green"}}>{getTrack(student)}</div>
            <article>{student.username}</article>
            <br></br>
            <article>Birthday: {student.dob}</article>
            <span onClick={controlShowMore}>{!showMore ? "ShowMore..." : "Show less..."}</span>
            {showMore ? (
                <>
                {getInfo(student)} <br></br>
                <span onClick={controlShowNotes}>
                    {!showNotes ? "1-on-1 Notes" : "Hide 1-on-1 Notes"}
                </span>
                {showNotes ? <>{controlNotes(student)}</> : null}
                </>
            ) : null}       
            
        </div>
    )
}
