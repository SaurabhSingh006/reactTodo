import { useRef, useState } from 'react';
import './App.css';
import ListTask from './components/list-task/list-task.component';

function App() {
  const inputRef = useRef(null);
  const [taskList, setTaskList] = useState(["Add task here", "Task 2"]);

  const handleInput = () => {
    if(inputRef.current.value) {
      setTaskList([...taskList, inputRef.current.value]);
      inputRef.current.value = "";
    }
  }

  return (
    <div className="App">
      <h1>TODO App</h1>
      <input ref={inputRef} type="text"></input>
      <button onClick={handleInput}>Add task</button>
 
      <ListTask list={taskList} ></ListTask>
    </div>
  );
}

export default App;
