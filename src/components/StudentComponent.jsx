import { useState } from "react";

export default function studentComponent({ student }) {
    const [notes, setNotes] = useState(false);

    function processCertification(student, certificationType) {
        if (student.certifications[certificationType] == false) {
            return "❌";
        } else {
            return "✅";
        }
    }
}
    function getTrack(student) {
        if (student.codewars.current.total > 600
                && student.certifications.resume && 
                student.certifcations.linkedin && student.certifications.github && 
                student.certifications.mockInterview == true 
            ) 
            {
                return <>On Track to Graduate</>
            }
    }

    const nameOfStudent = `${student.names.preferredName} ${student.names.middleName} 
    ${student.names.surName}`;

    function showMore(student) {
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
