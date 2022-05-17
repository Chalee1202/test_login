import React, { useState } from "react";

function Navbar() {
  return (
    <div className="fixed w-full flex bg-green-200 h-14 px-5 py-2 justify-between items-center">
      {/* <img src="image/menu.png" className="bg-red-200" /> */}
      <div className="w-max flex cursor-pointer items-center ">
        <img className="w-10" src="image/logo2.png" />
        <p className="text-purple-800 font-bold text-3xl">Maew</p>
      </div>
      <div className="w-max flex cursor-pointer items-center">
        <p className="text-purple-800 mx-2 font-bold">Jack</p>
        <img className="w-10 rounded-3xl" src="image/Jack.png" />
      </div>
    </div>
  );
}

export default Navbar;
