import React from "react"

export const Header=()=>{
    return(
        <div className="w-screen sm:h-[12vh] h-[12vh] bg-[#271BB1] rounded-bl-[20px] rounded-br-[20px] shadow-xl flex flex-row items-center justify-between">
        <h1 className="text-white text-sm sm:text-3xl font-bold pl-2 sm:pl-16 ">
          Revolutionize the way you run queries
        </h1>
        <div>
            <select className=" sm:mr-10  sm:p-2 rounded-md outline-none mr-2 text-sm sm:text-md font-bold">
                <option>
                    Business Analyst
                </option>
                <option>
                    Data Scientist
                </option>
            </select>
        </div>
      </div>
    )
}
