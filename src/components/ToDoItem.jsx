const ToDoItem = ({ toggleToDo, editToDo, deleteToDo }) => {
  const buttonStyles = "size-8 border rounded";

  return (
    <li className="w-full p-1 flex justify-center items-center gap-1 border rounded">
      <button className={`${buttonStyles}`} onClick={() => toggleToDo()}>
        <i className="fa-solid fa-check"></i>
      </button>
      <p className="flex-1">ToDo</p>
      <button className={`${buttonStyles}`} onClick={() => editToDo()}>
        <i className="fa-solid fa-pen"></i>
      </button>
      <button className={`${buttonStyles}`} onClick={() => deleteToDo()}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
};

export default ToDoItem;
