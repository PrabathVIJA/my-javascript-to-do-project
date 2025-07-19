import { MdDone, MdDelete, MdEdit } from "react-icons/md";
import { useState } from "react";
export default function SingleToDo({ singleTask, deleteHandler, doneHandler }) {
  const [edit, setEdit] = useState(false);
  const [individualTask, setIndividualTask] = useState(singleTask.title);

  return (
    <>
      <div className="Task">
        {edit ? (
          <input
            value={individualTask}
            onChange={(e) => setIndividualTask(e.target.value)}
          />
        ) : (
          <span className={singleTask.done ? "strike" : ""}>
            {individualTask}
          </span>
        )}

        <button onClick={() => doneHandler(singleTask.id)}>
          <MdDone />
        </button>

        <button onClick={() => deleteHandler(singleTask.id)}>
          <MdDelete />
        </button>
        <button onClick={() => setEdit(true)}>
          <MdEdit />
        </button>
        <button onClick={() => setEdit(false)}>Save</button>
      </div>
    </>
  );
}
