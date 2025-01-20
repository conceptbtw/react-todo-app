import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos, toggleToDo, editToDo, deleteToDo }) => {
  return (
    <ul className="w-full center flex-col gap-1">
      {toDos.map((toDo) => (
        <ToDoItem key={toDo.id} toDo={toDo} toggleToDo={toggleToDo} editToDo={editToDo} deleteToDo={deleteToDo} />
      ))}
    </ul>
  );
};

export default ToDoList;
