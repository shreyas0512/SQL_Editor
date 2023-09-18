import React from "react";
import { UserRole } from "../Contexts/UserContext";
import { useContext } from "react";
export const Header = () => {
  const { role, setRole } = UserRole();
  return (
    <div className="w-screen sm:h-[12vh] h-[12vh] bg-[#271BB1] rounded-bl-[20px] rounded-br-[20px] shadow-xl flex flex-row items-center justify-between">
      <h1 className="text-white text-sm sm:text-3xl font-bold pl-2 sm:pl-16 ">
        Revolutionize the way you run queries
      </h1>
      <div>
        <label htmlFor="role" className="sr-only">
          Select Role:
        </label>
        <select id="role"
          className=" sm:mr-10  sm:p-2 rounded-md outline-none mr-2 text-sm sm:text-md font-bold"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option value="Hero">Hero</option>
          <option value="Business Analyst">Business Analyst</option>
          <option value="Data Scientist">Data Scientist</option>
        </select>
      </div>
    </div>
  );
};
