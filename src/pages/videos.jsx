import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Videos() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="w-full mt-14 p-5">
        <div className="grid grid-cols-4 gap-5">
          <div className="w-full h-40 bg-red-400 flex flex-col items-center justify-center">
            Video 1
          </div>
          <div className="w-full h-40 bg-blue-400 flex flex-col items-center justify-center">
            Video 2
          </div>
          <div className="w-full h-40 bg-green-400 flex flex-col items-center justify-center">
            Video 3
          </div>
          <div className="w-full h-40 bg-orange-400 flex flex-col items-center justify-center">
            Video 4
          </div>
          <div className="w-full h-40 bg-yellow-400 flex flex-col items-center justify-center">
            Video 5
          </div>
          <div className="w-full h-40 bg-purple-400 flex flex-col items-center justify-center">
            Video 6
          </div>
          <div className="w-full h-40 bg-sky-400 flex flex-col items-center justify-center">
            Video 7
          </div>
          <div className="w-full h-40 bg-red-400 flex flex-col items-center justify-center">
            Video 8
          </div>
          <div className="w-full h-40 bg-green-400 flex flex-col items-center justify-center">
            Video 9
          </div>
        </div>
      </div>
      {/* <div className="w-full mt-14 p-5">
        <div className="grid grid-cols-5 gap-6">
          <div className="w-full h-16 bg-slate-400 flex flex-col items-center justify-center">
            video 1
          </div>
          <div className="w-full h-16 bg-red-400 flex flex-col items-center justify-center">
            video 2
          </div>
          <div className="w-full h-16 bg-green-400 flex flex-col items-center justify-center">
            video 3
          </div>
          <div className="w-full h-16 bg-yellow-400 flex flex-col items-center justify-center">
            video 4
          </div>
          <div className="w-full h-16 bg-blue-400 flex flex-col items-center justify-center">
            video 5
          </div>
          <div className="w-full h-16 bg-gray-400 flex flex-col items-center justify-center">
            video 6
          </div>
          <div className="w-full h-16 bg-purple-400 flex flex-col items-center justify-center">
            video 7
          </div>
          <div className="w-full h-16 bg-pink-400 flex flex-col items-center justify-center">
            video 8
          </div>
          <div className="w-full h-16 bg-indigo-400 flex flex-col items-center justify-center">
            video 9
          </div>
          <div className="w-full h-16 bg-green-400 flex flex-col items-center justify-center">
            video 10
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Videos;
