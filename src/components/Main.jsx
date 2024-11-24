import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

const Main = () => {
  return (
    <main className="p-4 flex flex-1 justify-center items-center">
      <AddToDo />
      <ToDoList />
    </main>
  );
};

export default Main;
