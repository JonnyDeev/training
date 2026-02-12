import React from "react";

function GreetingCard({ name = "john", emoji }) {
  return (
    <div className="flex flex-col bg-linear-to-br from-blue-50 via-blue-100 to-blue-200 rounded-xl p-6 m-4 max-w-90% border border-blue-200 shadow-xl">
      <h2 className="text-6xl mb-2">{emoji}</h2>
      <h1 className="text-blue-900 text-3xl font-bold mb-2">Hello, {name}!</h1>
      <p className=" text-blue-700">Welcome to React Learning Lab</p>
    </div>
  );
}

export default GreetingCard;
