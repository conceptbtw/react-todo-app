import { useState } from "react";

const AddToDo = ({ addToDo }) => {
  const [toDo, setToDo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toDo.trim()) {
      addToDo(toDo);
      setToDo("");
    }
  };

  return (
    <form
      className="w-full p-1 flex justify-center items-center gap-1 border rounded"
      onSubmit={handleSubmit}
    >
      <input
        className="h-8 p-1 flex-1"
        type="text"
        placeholder="Add ToDo..."
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button className="size-8 border rounded" type="submit">
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
};

export default AddToDo;
