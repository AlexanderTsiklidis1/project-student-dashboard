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
