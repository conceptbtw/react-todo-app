import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  return (
    <ul className="w-full flex flex-col justify-center items-center gap-1">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </ul>
  );
};

export default ToDoList;
