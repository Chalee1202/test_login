import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full h-screen flex flex-col bg-slate-700 p-6">
      <p className="text-red-700 font-bold text-center text-4xl">Login</p>
      <img
        className="w-64 mx-auto mt-6"
        src="http://cartoon.mthai.com/app/uploads/2011/09/300px-nyan_cat_animation.gif"
      />
      <input
        className="mt-3 w-72 mx-auto rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border mt-1 w-72 mx-auto rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-white mt-4 w-max mx-auto px-2 rounded"
        type="button"
        onClick={() => alert("Login สำเร็จ")}
      >
        Login
      </button>
    </div>
  );
}

export default LoginPage;
