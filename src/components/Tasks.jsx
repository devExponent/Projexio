const Tasks = ({
  onClick,
  handleTasks,
  projectTasks,
  setProjectTasks,
  clearTask,
}) => {
  return (
    <div>
      <div className="h-px bg-gray-300 my-4 w-full"></div>

      <h1 className="text-4xl font-bold text-stone-600">Tasks</h1>
      <form className="flex gap-6 my-6 w-full items-center">
        <input
          type="text"
          className="border rounded-md p-2"
          onChange={(e) => setProjectTasks(e.target.value)}
          value={projectTasks}
          autoFocus
          required
        />

        <button onClick={onClick}>Add Task</button>
      </form>
      <div>
        {handleTasks <= 0 ? (
          <p>This proect does not have any tasks yet</p>
        ) : (
          <div className="bg-stone-600 p-6 rounded-xl">
            {handleTasks.map((taskitems, index) => (
              <ul key={index}>
                <div className="flex justify-between items-center">
                  <li className="my-2 text-white text-xl">{taskitems}</li>
                  <button
                    className="text-xl hover:text-red-500"
                    onClick={() => clearTask(index)}
                  >
                    Clear
                  </button>
                </div>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
