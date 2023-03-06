
export default function ListTask (props) {
    console.log(props);

    return (
        <div style={{ textAlign: 'left' }}>
            <h1>Task lists</h1>
            <div>
                {
                    props.list.map((task,i) => (
                        <h4 key={i}>{i + 1}. {task}</h4>
                    ))
                }
            </div>
        </div>
    );
}