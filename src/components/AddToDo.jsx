const AddToDo = () => {
  return (
    <form className="w-full p-1 flex justify-center items-center gap-1 border rounded">
      <input className="h-8 p-1 flex-1" type="text" placeholder="Add ToDo..." />
      <button className="size-8 border rounded" type="submit">
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
};

export default AddToDo;
