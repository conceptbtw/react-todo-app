import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

const Main = () => {
  const addToDo = () => {};

  const toggleToDo = () => {};

  const editToDo = () => {};

  const deleteToDo = () => {};

  return (
    <main className="max-w-3xl w-full p-4 flex flex-1 flex-col justify-center items-center gap-1">
      <AddToDo addToDo={addToDo} />
      <ToDoList
        toggleToDo={toggleToDo}
        editToDo={editToDo}
        deleteToDo={deleteToDo}
      />
    </main>
  );
};

export default Main;
