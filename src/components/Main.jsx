import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

const Main = () => {
  const [toDos, setToDos] = useState([]);

  const addToDo = (toDo) => {
    setToDos([...toDos, { id: uuidv4(), toDo, isCompleted: false }]);
  };

  const toggleToDo = () => {};

  const editToDo = () => {};

  const deleteToDo = () => {};

  return (
    <main className="max-w-3xl w-full p-4 flex flex-1 flex-col justify-center items-center gap-1">
      <AddToDo addToDo={addToDo} />
      <ToDoList
        toDos={toDos}
        toggleToDo={toggleToDo}
        editToDo={editToDo}
        deleteToDo={deleteToDo}
      />
    </main>
  );
};

export default Main;
