import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <div className="flex justify-around items-center flex-row bg-white py-2 rounded-lg my-10">
          <div className="flex flex-row py-2 px-4 gap-3 justify-center items-center">
            <FontAwesomeIcon
              icon={faSquare}
              size="lg"
              style={{ color: "#ababab" }}
            />
            <h1 className="font-sans text-xl text-gray-600">To Do</h1>
          </div>

          <div className="flex flex-row py-2 px-4 gap-3 justify-center items-center">
            <FontAwesomeIcon
              icon={faSquare}
              size="lg"
              style={{ color: "#FF584E" }}
            />

            <h1 className="font-sans text-xl text-red-600">In Progress</h1>
          </div>

          <div className="flex flex-row py-2 px-4 gap-3 justify-center items-center">
            <FontAwesomeIcon
              icon={faSquare}
              size="lg"
              style={{ color: "#00DE43" }}
            />
            <h1 className="font-sans text-xl text-green-600">Under Review</h1>
          </div>

          <div className="flex flex-row py-2 px-4 gap-3 justify-center items-center">
            <FontAwesomeIcon
              icon={faSquare}
              size="lg"
              style={{ color: "#F5C100" }}
            />
            <h1 className="font-sans text-xl text-yellow-600">Done</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
