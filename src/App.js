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

  return (
    <div className="App">
      <h1>TODO App</h1>
      <form onSubmit={handleSubmit}>
        <input autoFocus ref={inputRef} type="text"></input>
        <button className='btn-grad' onClick={handleInput}>Add task</button>
      </form>
 
      <ListTask list={taskList} ></ListTask>
    </div>
  );
}

export default App;
