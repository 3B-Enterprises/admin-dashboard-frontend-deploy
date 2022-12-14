import { useState } from "react";
import { Navbar } from "../../components/Nav/Navbar";

export const EditForm = () => {
  const handleState = () => {
    console.log();
  };
  return (
    <div className="flex">
      <div className="h-screen  w-1/6">
        <Navbar />
      </div>
      <div className="flex-1">
        <form className="flex flex-col my-5 m-auto w-full max-w-[448px] border-2 rounded-[12px] shadow-md">
          <div className="py-3 w-1/2 px-4">
            <span className="text-2xl font-semibold">Editar</span>
          </div>
          <input
            type="text"
            placeholder="texto 1"
            name="texto1"
            className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
            onChange={handleState()}
          />
          <input
            type="text"
            className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
            placeholder="texto 2"
            name="texto2"
          />
          <input
            type="text"
            className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
            placeholder="texto 3"
            name="texto3"
          />
          <input
            type="text"
            className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
            placeholder="texto 4"
            name="texto4"
          />
          <input
            type="text"
            className="px-4 my-3 border-2 rounded focus:outline-none w-4/5 mx-auto"
            placeholder="texto 5"
            name="texto5"
          />
          <button
            type="submit"
            className="border rounded-md text-white bg-orange-400 w-20 my-4 mx-auto"
          >
            Editar
          </button>
        </form>
      </div>
    </div>
  );
};
