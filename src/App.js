import React from "react";
import Task from "./Task";

function App() {
  const [todo, setTodo] = React.useState([]);
  console.log(todo);

  function handleAdd() {
    const inputField = document.querySelector("input[name='todoInput']");
    const newTask = inputField.value.trim();
    if (newTask) {
      setTodo((prevToDo) => {
        return [...prevToDo, newTask];
      });
      inputField.value = "";
    }
  }
  function updateProcess(updateTask, index) {
    const updatedElements = [...todo];
    updatedElements[index] = updateTask;
    setTodo(updatedElements);
  }
  function deleteTask(index) {
    setTodo((prevTasks) => prevTasks.filter((task, i) => i != index));
  }

  return (
    <div className="App">
      <div className="to-do-app">
        <div className="intro-part">
          <h1>TODO LIST</h1>
          <hr />
          <input placeholder="add item..." type="text" name="todoInput" />
          <button className="add-btn" onClick={handleAdd}>
            ADD
          </button>
          {todo.map((task, index) => (
            <Task
              key={index}
              todo={task}
              onUpdate={updateProcess}
              index={index}
              onDelete={() => deleteTask(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
