import React, { useState } from "react";
import "./to_do_list.css";

export const To_do_list = () => {
  const [Tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //* add task
  const addTask = () => {
    if (inputValue) {
      const newTab = [...Tasks];
      newTab.push(inputValue);
      setTasks(newTab);
      // setTasks(prev => [...prev, inputValue])
      setInputValue("");
      // console.log(Tasks);
    }
  };

  //* delete task
  const deleteTask = (idx) => {
    const newTab = [...Tasks];
    newTab.splice(idx, 1);
    setTasks(newTab);
  };

  //* update task
  const updateTask = (idx) => {
    const newTab = [...Tasks];
    let newValue = prompt("Enter New Task Name");
    newTab[idx] = newValue;
    setTasks(newTab);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex items-start  justify-center to_do_list">
      <div className="flex flex-col w-[50vw]  mt-10 ">
        <div className="p-5 border-b-2 border-white border-solid flex justify-evenly ">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Enter Task Name"
          />
          <button
            onClick={addTask}
            className="bg-white px-8 py-3 rounded-full font-bold">
            Add Task
          </button>
        </div>
        <div className="">
          <>
            {Tasks.map((ele, index) => (
              <>
                <div
                  key={index}
                  className="w-[100%] h-[10vh] px-3 flex items-center justify-between border-b-2 border-white border-solid">
                  <input
                    type="text"
                    value={ele}
                    readOnly
                    className="border-none bg-inherit h-[100%] font-bold text-2xl "
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => deleteTask(index)}
                      className="bg-white px-8 py-3 rounded-full font-bold">
                      delete
                    </button>
                    <button
                      onClick={() => updateTask(index)}
                      className="bg-white px-8 py-3 rounded-full font-bold">
                      update
                    </button>
                  </div>
                </div>
              </>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};
