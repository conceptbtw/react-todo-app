import { useState } from "react";

const ToDoItem = ({ toDo, toggleToDo, editToDo, deleteToDo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newToDo, setNewToDo] = useState(toDo.toDo);

  const handleEdit = () => {
    if (isEditing && newToDo.trim()) {
      editToDo(toDo.id, newToDo);
    }
    setIsEditing(!isEditing);
  };

  const buttonStyles =
    "size-10 flex justify-center items-center border border-white/10 rounded-full";

  return (
    <li
      className={`w-full p-1 flex justify-center items-center gap-1 border border-white/10 rounded-full bg-black/10 ${
        toDo.isCompleted ? "opacity-25" : "opacity-100"
      }`}
    >
      <button
        className={`${buttonStyles} bg-white/10`}
        onClick={() => toggleToDo(toDo.id)}
      >
        {toDo.isCompleted && <i className="fa-solid fa-check"></i>}
      </button>
      {isEditing ? (
        <input
          className="h-10 flex-1 bg-transparent focus:outline-none"
          type="text"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
      ) : (
        <p className="flex-1">{toDo.toDo}</p>
      )}
      <button
        className={`${buttonStyles} ${
          isEditing ? "bg-green-500/10" : "bg-white/10"
        }`}
        onClick={handleEdit}
      >
        {isEditing ? (
          <i className="fa-solid fa-save"></i>
        ) : (
          <i className="fa-solid fa-pen"></i>
        )}
      </button>
      <button
        className={`${buttonStyles} bg-red-500/10`}
        onClick={() => deleteToDo(toDo.id)}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
};

export default ToDoItem;
