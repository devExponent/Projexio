import { useState } from "react";

const Task = ({ tasks, onChange, onSave, saveTask }) => {
  return (
    <div className="w-full md:w-8/12 mx-auto p-6">
      <div className="flex justify-end mb-6">
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-md border hover:bg-red-500">
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
            value={tasks.title}
            name="title"
            onChange={onChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-semibold">DESCRIPTION</label>
          <textarea
            className="border rounded-md p-2 h-32"
            value={tasks.description}
            name="description"
            onChange={onChange}
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-semibold">DUE DATE</label>
          <input
            type="date"
            className="border rounded-md p-2"
            value={tasks.date}
            name="date"
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Task;
