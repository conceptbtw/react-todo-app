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

  const buttonStyles = "size-8 border rounded";

  return (
    <li className="w-full p-1 flex justify-center items-center gap-1 border rounded">
      <button className={`${buttonStyles}`} onClick={() => toggleToDo(toDo.id)}>
        {toDo.isCompleted && <i className="fa-solid fa-check"></i>}
      </button>
      {isEditing ? (
        <input
          className="h-8 p-1 flex-1"
          type="text"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
      ) : (
        <p className="flex-1">{toDo.toDo}</p>
      )}
      <button className={`${buttonStyles}`} onClick={handleEdit}>
        {isEditing ? (
          <i className="fa-solid fa-save"></i>
        ) : (
          <i className="fa-solid fa-pen"></i>
        )}
      </button>
      <button className={`${buttonStyles}`} onClick={() => deleteToDo(toDo.id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
};

export default ToDoItem;
