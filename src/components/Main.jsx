import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

const Main = () => {
  const [toDos, setToDos] = useState(() => {
    const storedToDos = localStorage.getItem("toDos");
    return storedToDos ? JSON.parse(storedToDos) : [];
  });

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = (toDo) => {
    setToDos([...toDos, { id: uuidv4(), toDo, isCompleted: false }]);
  };

  const toggleToDo = (id) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, isCompleted: !toDo.isCompleted } : toDo
      )
    );
  };

  const editToDo = (id, newToDo) => {
    setToDos(
      toDos.map((toDo) => (toDo.id === id ? { ...toDo, toDo: newToDo } : toDo))
    );
  };

  const deleteToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  return (
    <main className="max-w-3xl w-full p-4 md:p-5 center flex-1 flex-col gap-1">
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
