import { useState } from "react";
import { nanoid } from "nanoid";
import List from "./components/List.jsx";

import "./App.css";
import Input from "./components/Input.jsx";

function App() {
  const [listOfTasks, setListOfTasks] = useState([
    {
      id: "1",
      title: "reading",
      done: false,
    },
  ]);
  const [task, setTask] = useState("");

  function setTaskHandler(e) {
    setTask(e.target.value);
  }

  function addTaskHandler() {
    if (task === "") {
      alert("Please enter something");
      return;
    }
    setListOfTasks([
      ...listOfTasks,
      { id: nanoid(), title: task, done: false },
    ]);
    setTask("");
  }
  function handleDelete(id) {
    const updatedTasks = listOfTasks.filter((task) => task.id !== id);
    setListOfTasks(updatedTasks);
  }

  function doneHandler(id) {
    const updatedTasks = listOfTasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      } else {
        return task;
      }
    });
    setListOfTasks(updatedTasks);
  }

  return (
    <>
      <Input
        value={task}
        onChange={setTaskHandler}
        placeholder="enter the task"
      />
      <button onClick={addTaskHandler}>Add</button>
      <List
        listOfTask={listOfTasks}
        deleteHandler={handleDelete}
        doneHandler={doneHandler}
      />
    </>
  );
}

export default App;
