const ToDoItem = ({ toDo, toggleToDo, editToDo, deleteToDo }) => {
  const buttonStyles = "size-8 border rounded";

  return (
    <li className="w-full p-1 flex justify-center items-center gap-1 border rounded">
      <button className={`${buttonStyles}`} onClick={() => toggleToDo(toDo.id)}>
        <i className="fa-solid fa-check"></i>
      </button>
      <p className="flex-1">{toDo.toDo}</p>
      <button className={`${buttonStyles}`} onClick={() => editToDo(toDo.id)}>
        <i className="fa-solid fa-pen"></i>
      </button>
      <button className={`${buttonStyles}`} onClick={() => deleteToDo(toDo.id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
};

export default ToDoItem;
