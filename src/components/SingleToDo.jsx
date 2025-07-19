import { MdDone, MdDelete, MdEdit } from "react-icons/md";
import { useState } from "react";
export default function SingleToDo({ singleTask, deleteHandler }) {
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
          <span>{individualTask}</span>
        )}

        <MdDone />
        <button onClick={() => deleteHandler(singleTask.id)}>
          <MdDelete />
        </button>
        <button onClick={() => setEdit((prev) => !prev)}>
          <MdEdit />
        </button>
      </div>
    </>
  );
}
