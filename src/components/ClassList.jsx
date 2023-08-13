export default function ClassList({startDateLists, filteredStartDateLists}) {
    return (
        <div className="startDate">
            <ul>
                <h1>Choose a Class by Start Date</h1>
                {startDateLists.map((startDateList) => {
                    return (
                        <li className="startDateList" key={startDateList}>
                            <h3 onClick={() => filteredStartDateLists([startDateList])}>
                                {startDateList}
                            </h3>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}