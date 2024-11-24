const ToDoItem = () => {
  const buttonStyles = "border rounded";

  return (
    <li className="">
      <button className={`${buttonStyles}`}>
        <i class="fa-solid fa-check"></i>
      </button>
      <p className="">ToDo</p>
      <button className={`${buttonStyles}`}>
        <i class="fa-solid fa-pen"></i>
      </button>
      <button className={`${buttonStyles}`}>
        <i class="fa-solid fa-trash"></i>
      </button>
    </li>
  );
};

export default ToDoItem;
