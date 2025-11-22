import { useState } from "react";
import Projects from "./components/Projects";
import Tasks from "./components/Tasks";
function Projexio() {
  const [addProject, setAddProject] = useState(false);

  const [projects, setProjects] = useState({
    title: "",
    description: "",
    date: "",
    tasks: [],
  });
  const [saveTask, setSaveTask] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const [projectTasks, setProjectTasks] = useState("");
  const [handleTasks, setHandleTasks] = useState([]);

  const addTasks = () => {
    if (selectedProjectIndex === null) return;

    setSaveTask((prevProjects) =>
      prevProjects.map((proj, idx) => {
        if (idx === selectedProjectIndex) {
          return {
            ...proj,
            tasks: [...proj.tasks, projectTasks], // add new task
          };
        }
        return proj;
      })
    );

    // Reset input field
    setProjectTasks("");
  };

  const taskInput = (e) => {
    const { name, value } = e.target;
    setProjects((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const save = () => {
    setSaveTask((prevtasks) => [...prevtasks, projects]);
    setProjects({
      title: "",
      description: "",
      date: "",
      tasks: [],
    });
    setAddProject(false);
  };

  const AddProject = () => {
    setAddProject(true);
  };

  return (
    <div className="flex bg-gray-100 h-screen">
      <aside className="w-100 bg-black text-white p-5 shadow-md hidden md:block rounded-tr-2xl ">
        <h1 className="text-2xl font-bold my-6">YOUR PROJECTS</h1>

        <div>
          <button
            className="bg-stone-600 rounded-xl py-3 px-6 text-lg text-center text-white"
            onClick={AddProject}
          >
            + Add Project
          </button>
        </div>
        {saveTask.length <= 0 ? (
          <p className="my-3">You have no project yet!</p>
        ) : (
          <>
            {saveTask.map((project, index) => (
              <div
                key={index}
                className="cursor-pointer hover:bg-stone-600  rounded-xl my-3 p-2"
                onClick={() => {
                  setSelectedProjectIndex(index);
                  setAddProject(false);
                }}
              >
                {project.title}
              </div>
            ))}
          </>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Welcome, Exponent</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
              Notifications
            </button>
            <div className="p-2 bg-gray-200 rounded">Profile</div>
          </div>
        </header>

        <div className="grid place-items-center h-full">
          <div className="w-full md:w-10/12 mx-auto">
            {addProject ? (
              <Projects
                projects={projects}
                onChange={taskInput}
                onSave={save}
                saveTask={saveTask}
              />
            ) : selectedProjectIndex !== null ? (
              <div className=" p-6 rounded shadow-md">
                <div className="my-5">
                  <div className="flex justify-between items-center">
                    <h2 className="text-4xl font-bold text-stone-600 mb-4">
                      {saveTask[selectedProjectIndex].title}
                    </h2>
                    <button className="hover:text-red-500">Delete</button>
                  </div>
                  <p className="mb-2 text-stone-400 text-2xl">
                    {saveTask[selectedProjectIndex].date}
                  </p>
                  <p className="mb-2">
                    {saveTask[selectedProjectIndex].description}
                  </p>
                </div>
                <div>
                  <Tasks
                    onClick={addTasks}
                    handleTasks={handleTasks}
                    projectTasks={projectTasks}
                    setProjectTasks={setProjectTasks}
                  />
                </div>
              </div>
            ) : (
              <div className="text-center">
                <h1 className="font-bold text-3xl my-8">No Project Selected</h1>
                <p className="text-xl my-8">
                  Select a project or get started with a new one
                </p>
                <button className="bg-stone-600 rounded-xl py-3 px-6 text-lg text-center text-white">
                  Create a new Project
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Projexio;
