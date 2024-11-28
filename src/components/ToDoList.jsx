import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDos, toggleToDo, editToDo, deleteToDo }) => {
  return (
    <ul className="w-full flex flex-col justify-center items-center gap-1">
      {toDos.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          toDo={toDo}
          toggleToDo={toggleToDo}
          editToDo={editToDo}
          deleteToDo={deleteToDo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
