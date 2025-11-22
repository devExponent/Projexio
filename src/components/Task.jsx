import React from "react";

const Task = () => {
  return (
    <div className="w-8/12 mx-auto p-6">
      <div className="flex justify-end mb-6">
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-md border hover:bg-red-500">
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md bg-blue-600 hover:bg-[green] text-white">
            Save
          </button>
        </div>
      </div>

      <form className="space-y-6">
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">TITLE</label>
          <input type="text" className="border rounded-md p-2" />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-semibold">DESCRIPTION</label>
          <textarea className="border rounded-md p-2 h-32"></textarea>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-semibold">DUE DATE</label>
          <input type="date" className="border rounded-md p-2" />
        </div>
      </form>
    </div>
  );
};

export default Task;
