import SingleToDo from "./SingleToDo.jsx";
export default function List({ listOfTask, deleteHandler, doneHandler }) {
  return (
    <>
      {listOfTask.map((task) => (
        <SingleToDo
          singleTask={task}
          key={task.id}
          deleteHandler={deleteHandler}
          doneHandler={doneHandler}
        />
      ))}
    </>
  );
}
