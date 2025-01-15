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
      className="w-full p-1 center gap-1 border border-white/10 rounded-full bg-black/10"
      onSubmit={handleSubmit}
    >
      <input
        className="min-w-0 h-8 md:h-10 p-4 md:p-5 center flex-1 rounded-full outline-none placeholder-neutral-500 bg-transparent"
        type="text"
        placeholder="Add ToDo..."
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button
        className="size-8 md:size-10 center border border-white/10 active:border-neutral-200 rounded-full bg-white/10 active:scale-90 transition-transform"
        type="submit"
        aria-label="Add"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
};

export default AddToDo;
