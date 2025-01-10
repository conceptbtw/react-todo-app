import { useState, useRef, useEffect } from "react";

const ToDoItem = ({ toDo, toggleToDo, editToDo, deleteToDo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newToDo, setNewToDo] = useState(toDo.toDo);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    if (isEditing && newToDo.trim()) {
      editToDo(toDo.id, newToDo);
    }
    setIsEditing(!isEditing);
  };

  const buttonStyles =
    "size-8 md:size-10 center border border-white/10 active:outline outline-1 outline-neutral-200 rounded-full";

  return (
    <li
      className={`w-full p-1 center gap-1 border border-white/10 rounded-full bg-black/10 ${
        toDo.isCompleted ? "opacity-25" : ""
      }`}
    >
      <button
        className={`${buttonStyles} bg-white/10`}
        onClick={() => toggleToDo(toDo.id)}
        aria-label="Toggle"
      >
        {toDo.isCompleted && <i className="fa-solid fa-check"></i>}
      </button>
      {isEditing ? (
        <input
          ref={inputRef}
          className="min-w-0 h-8 md:h-10 flex-1 bg-transparent underline truncate focus:outline-none"
          type="text"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
      ) : (
        <p
          className={`flex-1 truncate ${
            toDo.isCompleted ? "line-through" : ""
          }`}
        >
          {toDo.toDo}
        </p>
      )}
      <button
        className={`${buttonStyles} ${
          isEditing ? "bg-green-500/10" : "bg-white/10"
        }`}
        onClick={handleEdit}
        aria-label="Edit"
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
        aria-label="Delete"
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
};

export default ToDoItem;
