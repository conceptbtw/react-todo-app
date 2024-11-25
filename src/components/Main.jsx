import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

const Main = () => {
  return (
    <main className="max-w-3xl w-full p-4 flex flex-1 flex-col justify-center items-center gap-1">
      <AddToDo />
      <ToDoList />
    </main>
  );
};

export default Main;
