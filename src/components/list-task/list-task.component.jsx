import './list-task.styles.scss';

function renderList({ list, updateTask }) {
    if(list.length) {
        return (
            list.map((task,i) => (
                <tr key={i}>
                    <td>{ i+ 1 }</td>
                    <td>{task.task}</td>
                    <td>{task.status}</td>
                    <td>{task.date.split(',')[0]}</td>
                    <td><button id={i} onClick={updateTask(task)}>Complete</button></td>
                </tr>
            ))
        )
    } else return ( <p style={{ textAlign: 'center' }}>No todo tasks</p> )
}

export default function ListTask (props) {
    console.log(props.list.length);

    return (

        <div className="container" style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.6rem'  }}>Task lists</h3>
            <div style={{ overflow: "scroll", height: "50vh" }}>
                <table>
                    <tr>
                        <th>No</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                    { renderList(props) }
                </table>
            </div>
        </div>
    );
}