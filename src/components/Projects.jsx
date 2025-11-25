const Projects = ({
  projects,
  onChange,
  onSave,
  onCancel,
  titleRef,
  dateRef,
  descriptionRef,
  validation,
}) => {
  return (
    <div className="w-full md:w-8/12 mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-end mb-6">
        <div className="flex gap-4">
          <button
            className="px-4 py-2 rounded-md border hover:bg-red-500"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-[green] text-white"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </div>

      <form className="space-y-6">
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">TITLE</label>
          <input
            type="text"
            className="border rounded-md p-2"
            value={projects.title}
            name="title"
            onChange={onChange}
            autoFocus
            ref={titleRef}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">DESCRIPTION</label>
          <textarea
            className="border rounded-md p-2 h-32 whitespace-pre-wrap"
            value={projects.description}
            name="description"
            ref={descriptionRef}
            onChange={onChange}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">DUE DATE</label>
          <input
            type="date"
            className="border rounded-md p-2"
            value={projects.date}
            name="date"
            ref={dateRef}
            min={new Date().toISOString().split("T")[0]}
            onChange={onChange}
          />
        </div>
        {!validation && (
          <p className="text-red-500 mt-2">All fields are required</p>
        )}
      </form>
    </div>
  );
};

export default Projects;
