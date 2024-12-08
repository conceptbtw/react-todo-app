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
      className="w-full p-1 flex justify-center items-center gap-1 border border-white/10 rounded-full bg-black/10"
      onSubmit={handleSubmit}
    >
      <input
        className="h-10 p-5 flex-1 rounded-full bg-transparent placeholder-neutral-500 focus:outline-none"
        type="text"
        placeholder="Add ToDo..."
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button
        className="size-10 flex justify-center items-center border border-white/10 rounded-full bg-white/10"
        type="submit"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
};

export default AddToDo;
