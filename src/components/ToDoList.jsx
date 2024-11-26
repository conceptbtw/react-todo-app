import ToDoItem from "./ToDoItem";

const ToDoList = ({ toggleToDo, editToDo, deleteToDo }) => {
  return (
    <ul className="w-full flex flex-col justify-center items-center gap-1">
      <ToDoItem
        toggleToDo={toggleToDo}
        editToDo={editToDo}
        deleteToDo={deleteToDo}
      />
    </ul>
  );
};

export default ToDoList;
