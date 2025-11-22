import { useState } from "react";

const Tasks = () => {
  const [projectTasks, setProjectTasks] = useState("");
  const [handleTasks, setHandleTasks] = useState([]);

  const addTasks = () => {
    setHandleTasks((prevtasks) => [...prevtasks, projectTasks]);
    setProjectTasks("");
  };

  return (
    <div>
      <div className="h-px bg-gray-300 my-4 w-full"></div>

      <h1 className="text-4xl font-bold text-stone-600">Tasks</h1>
      <div className="flex gap-6 my-6 w-full items-center">
        <input
          type="text"
          className="border rounded-md p-2"
          onChange={(e) => setProjectTasks(e.target.value)}
          value={projectTasks}
        />

        <button onClick={addTasks}>Add Task</button>
      </div>
      <div className="bg-stone-600 p-6 rounded-xl">
        {handleTasks.map((taskitems, index) => (
          <ul key={index}>
            <div className="flex justify-between items-center">
              <li className="my-2 text-white text-xl">{taskitems}</li>
              <button className="text-xl hover:text-red-500">Clear</button>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
