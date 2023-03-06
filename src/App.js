import { useRef, useState } from 'react';
import './App.css';
import ListTask from './components/list-task/list-task.component';

function App() {
  const inputRef = useRef(null);
  const [taskList, setTaskList] = useState([]);

  const handleInput = () => {
    if(inputRef.current.value) {
      setTaskList([...taskList, { task: inputRef.current.value, status: "Pending", date: new Date().toLocaleString() }]);
      inputRef.current.value = "";
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const updateTask = (e) => {
    const id = parseInt(e.target.id);
    const tasks = JSON.parse(JSON.stringify(taskList));
    tasks[id].status = "Completed";
    setTaskList(tasks)
  }

  return (
    <div className="App">
      <h1>TODO App</h1>
      <form onSubmit={handleSubmit}>
        <input autoFocus ref={inputRef} type="text"></input>
        <button className='btn-grad' onClick={handleInput}>Add task</button>
      </form>
 
      <ListTask list={taskList} updateTask={() => updateTask}></ListTask>
    </div>
  );
}

export default App;
