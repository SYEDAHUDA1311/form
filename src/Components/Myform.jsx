import React, { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    text1: "",
    text2: "",
    email: "",
    password: "",
    checkbox: false,
    radio: "",
    dropdown: "",
    date: "",
    number: 0,
    color: "#000000",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className="bg-white min-h-screen w-full flex justify-center items-center">
      <form className="flex flex-col space-y-1 w-[50%] border p-5 bg-gray-100 rounded-[15px]">
        <label>First Name</label>
        <input
          className="p-2 rounded-[6px]"
          type="text"
          name="text1"
          placeholder="Enter your first name"
        />
        <label>Last Name</label>
        <input
          className="p-2 rounded-[6px]"
          type="text"
          name="text2"
          placeholder="Enter your last name"
        />
        <label>Email</label>
        <input
          className="p-2 rounded-[6px]"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          className="p-2 rounded-[6px]"
          type="password"
          name="password"
          placeholder="Enter your email"
        />
        <div>
          <input
            className="p-2 h-[20px] w-[20px] rounded-[6px]"
            type="checkbox"
            name="checkbox"
          />
        </div>
        <div>
          <input className="p-2 rounded-[6px] h-[20px] w-[20px]" type="radio" name="radio" />
        </div>
        <label>Select Your Country</label>
        <select name="dropdown" className="p-2 rounded-[6px]">
          <option>Pakistan</option>
          <option>India</option>
          <option>England</option>
          <option>IreLand</option>
          <option>USA</option>
        </select>
        <label>Select Date</label>
        <input className="p-2 rounded-[6px]" type="date" name="date" />
        <label>Total Price</label>
        <input
          className="p-2 rounded-[6px]"
          type="number"
          name="number"
          placeholder="Enter total price"
        />
        <label>Select Your Favourite Colour</label>
        <input className="rounded-[6px]" type="color" name="color" />
        <input className="border p-2 rounded-[10px] bg-red-500 text-white" type="submit" value={"submit"} />
      </form>
    </div>
  );
}

export default MyForm;
