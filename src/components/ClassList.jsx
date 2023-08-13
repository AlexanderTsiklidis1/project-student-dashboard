export default function ClassList({cohorts, filteredClasses}) {
    return (
        <div className="classList">
            <ul>
                <h1 className="classChoose">Choose a Class by Start Date</h1>
                {cohorts.map((cohort) => {
                    return (
                        <li className="cohort" key={cohort}>
                            <h3 onClick={() => filteredClasses([cohort])}>
                                {cohort}
                            </h3>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}