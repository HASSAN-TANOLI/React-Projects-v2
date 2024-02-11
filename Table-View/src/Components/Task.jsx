import { useEffect, useState } from "react";

const Task = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [storyPoint, setStory] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [description, setDescription] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmissions, setFormSubmissions] = useState(() => {
    const savedFormSubmissions = localStorage.getItem("formSubmissions");
    return savedFormSubmissions ? JSON.parse(savedFormSubmissions) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title,
      storyPoint,
      assignTo,
      description,
    };

    // Update the form submissions array with the new form data
    setFormSubmissions([...formSubmissions, formData]);

    // Reset form fields
    setTitle("");
    setStory("");
    setAssignTo("");
    setDescription("");

    // Close modal
    setShowModal(false);

    // Set form submitted flag
    setFormSubmitted(true);
  };

  const handleAssignToChange = (e) => {
    setAssignTo(e.target.value);
  };

  useEffect(() => {
    const savedFormSubmissions = localStorage.getItem("formSubmissions");

    if (savedFormSubmissions) {
      setFormSubmissions(JSON.parse(savedFormSubmissions));
    }
  }, []);

  useEffect(() => {
    // Save form submissions to local storage whenever it changes
    localStorage.setItem("formSubmissions", JSON.stringify(formSubmissions));
  }, [formSubmissions]);

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setShowModal(true)}
        className="mx-auto block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Click to add tasks
      </button>

      {/* Modal */}
      {showModal && (
        <>
          {/* Modal content */}
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl flex justify-center">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-3/4 bg-white outline-none focus:outline-none p-8">
                {/* Modal header */}
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
                {/* Modal body */}
                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                  {/* Form fields */}
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Task Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type Task name"
                        required=""
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="sp"
                        className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Story Point
                      </label>
                      <input
                        type="number"
                        name="sp"
                        id="sp"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="1"
                        required=""
                        value={storyPoint}
                        onChange={(e) => setStory(e.target.value)}
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="assignTo"
                        className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Assign To
                      </label>
                      <select
                        id="assignTo"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        value={assignTo}
                        onChange={handleAssignToChange}
                      >
                        <option value="">Select Agent</option>
                        <option value="JH">Jhon</option>
                        <option value="DO">Doe</option>
                        <option value="JU">Jhulie</option>
                        <option value="MI">michael</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="description"
                        className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Task Description
                      </label>
                      <textarea
                        id="description"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write product description here"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="me-1 -ms-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Add new Task
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Modal overlay */}
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}

      {/* Display form submissions */}
      <div className="flex justify-between items-center flex-col md:flex-row lg:flex-row py-10 my-6 gap-8">
        <div className="w-full md:w-1/4 lg:w-1/4 border border-gray-400 rounded-md min-h-lvh py-2 px-1">
          <h1>Todo</h1>
          {formSubmissions.map((formData, index) => (
            <div key={index} className="shadow-lg p-3 m-3 rounded-lg">
              <h1 className="font-serif text-md font-medium">
                Task Title: {formData.title}
              </h1>
              <h4 className="font-serif text-md font-medium">
                Total SP: {formData.storyPoint}
              </h4>
              <h5 className="font-serif text-md font-medium">
                Assign To: {formData.assignTo}
              </h5>
              <p className="font-serif text-md font-medium">
                Description: {formData.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Task;
