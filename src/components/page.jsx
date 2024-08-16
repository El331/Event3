import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Manage() {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  const options = [
    { value: "select catagory", label: "select catagory" },
    { value: "option2", label: "Sport" },
    { value: "option3", label: "Seminar" },
    { value: "option4", label: "Cinema" },
    { value: "option5", label: "Theatre" },
    { value: "option6", label: "Exhibition" },
    { value: "option7", label: "Concert" },
    { value: "option8", label: "Other" },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  };

  return (
    <div className="flex flex-col mt-20 mb-10">
      <div className="flex justify-center ">
        <h1 className="text-3xl font-extrabold">
          Create And Manage Your Community{" "}
        </h1>
      </div>
      <div className=" flex justify-center text-3xl mb-6 font-extrabold">
        Events
      </div>
      <p className="flex justify-center mb-7">
        Provide the necessary information in the provided space below.
      </p>
      <form className="flex flex-col justify-center">
        <div className="bg-gray-200 m-7 h-auto p-5 rounded-md">
          <div className="flex">
            <div className="flex flex-col w-1/2 ">
              <label for="name" className="font-bold pb-2">
                Event Title
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="title"
                name="title"
                required
                placeholder="type here"
                className="p-4 w-4/5 h-10 bg-white rounded-md  border-none focus:outline-none"
              />
            </div>
            <div className="flex flex-col w-1/2 m-3">
              <label for="date" className="font-bold pb-2">
                Time
              </label>
            </div>
          </div>
          <div className="flex  m-3 min-h-64">
            <div className="w-1/2 ">
              <div>
                <label for="date" className="font-bold ">
                  Select Date
                </label>
                <Calendar
                  className="mb-4 mt-3 rounded-md border-none p-2"
                  onChange={onChange}
                  value={date}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-bold pb-2">
                  Venue
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="venue"
                  name="venue"
                  required
                  placeholder="type here"
                  className="p-4 w-4/5 h-10 bg-white rounded-md  border-none focus:outline-none"
                />
              </div>
            </div>
            <div className="w-1/2">
              <div></div>
              <div className="flex flex-col ">
                <label htmlFor="" className="font-bold pb-2">
                  what type of event are you posting
                </label>
                <select
                  className="p-4 bg-white rounded-md focus:outline-none "
                  value={selectedValue}
                  onChange={handleChange}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-screen m-3">
            <label htmlFor="" className="font-bold pb-2">
              Prohibited things
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="prohibitedthings"
              name="prohibitedthings"
              required
              placeholder="type here"
              className="p-4 w-4/5 h-10 bg-white rounded-md border-none focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-screen m-3">
            <label htmlFor="" className="font-bold pb-2">
              Amenities
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="amenities"
              name="amenities"
              required
              placeholder="type here"
              className="p-4 w-4/5 h-10 bg-white rounded-md  border-none focus:outline-none"
            />
          </div>
          <div className="flex flex-col h-40 m-3">
            <label htmlFor="" className="font-bold pb-2">
              Description
            </label>
            <textarea
              onChange={handleChange}
              className="border-none focus:outline-none p-2"
              name="description"
              id="description"
              cols="10"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="border border-black w-20 p-2 " type="submit">
            DONE!
          </button>
        </div>
      </form>
    </div>
  );
}

export default Manage;
