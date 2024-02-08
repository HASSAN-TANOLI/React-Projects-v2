import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Alert, Calendar } from "antd";

const App = () => {
  const [value, setValue] = useState(() => dayjs("2017-01-25"));
  const [selectedValue, setSelectedValue] = useState(() => dayjs("2017-01-25"));
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [clickedDate, setClickedDate] = useState(""); // To store the clicked date
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : {};
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
    setShowModal(true);
    setClickedDate(newValue.format("YYYY-MM-DD"));
  };

  useEffect(() => {
    console.log(selectedValue);
    console.log(clickedDate);
  }, [selectedValue, clickedDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Title:", title);
    console.log("Selected Description:", description);
    setTasks({ ...tasks, [clickedDate]: { title, description } });
    setTitle("");
    setDescription("");
    setShowModal(false);
  };

  const cellRender = (date) => {
    const currentDate = date.format("YYYY-MM-DD");
    const task = tasks[currentDate];
    if (task) {
      return (
        <div>
          <p>Title: {task.title}</p>
          <p>Description: {task.description}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="max-w-7xl mx-auto my-10 px-8 py-8 border border-black-700">
        <Alert
          message={`You selected date: ${selectedValue?.format("YYYY-MM-DD")}`}
        />
        <Calendar
          value={value}
          onSelect={onSelect}
          onPanelChange={setValue}
          cellRender={cellRender}
        />
      </div>

      {showModal ? (
        <>
          {/* Your modal component */}
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl flex justify-center">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-3/4 bg-white outline-none focus:outline-none p-8">
                {/*header*/}
                <div className="flex items-start justify-between py-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Tasks</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black-800 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black-800 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form className="w-full py-6" onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Task Name
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className=" float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add Task
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default App;
