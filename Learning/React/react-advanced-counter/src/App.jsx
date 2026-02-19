import { useState } from "react";
import "./App.css";

function App() {
  const [simpleCounter, setSimpleCounter] = useState(0);
  // const [stepsValue, setStepsValue] = useState(1);

  const handleIncrease = () => {
    setSimpleCounter(simpleCounter + 1);
  };

  const handleDecrease = () => {
    setSimpleCounter(simpleCounter - 1);
  };

  const handleReset = () => {
    setSimpleCounter(0);
  };

  // // const handleSteps = () => {
  //   stepsValue == setStepsValue()
  // }
  return (
    <>
      {/* Container */}
      <div className="flex flex-col h-screen m-2">
        {/* Headings */}
        <div className="flex items-center justify-center m-4 flex-col">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Project 2: Counter App
          </h1>
          <p className="text-gray-500 text-xl">
            State Management with useState
          </p>
        </div>
        {/* Counter Displays Container */}
        <div className="flex flex-row gap-8">
          {/* Simple Counter */}
          <div className="bg-gray-100 border border-gray-300 shadow-lg rounded-xl flex flex-col items-center justify-between w-1/2 h-80 py-8">
            <p className="text-xl text-gray-600">Simple Counter</p>
            <h4 className="text-5xl font-bold text-blue-400">
              {simpleCounter}
            </h4>
            <div className="flex">
              <button
                className="bg-red-400 border border-gray-400 rounded-lg p-2 w-1/3 px-4 text-center mx-2 font-bold text-gray-900 "
                onClick={handleDecrease}
              >
                Decrease
              </button>
              <button
                className="bg-gray-200 border border-gray-400 rounded-lg p-2 w-1/3 px-4 text-center mx-2 font-bold text-gray-500 "
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                className="bg-blue-400 border border-gray-400 rounded-lg p-2 w-1/3 px-4 text-center mx-2 font-bold text-gray-900 "
                onClick={handleIncrease}
              >
                Increase
              </button>
            </div>
          </div>

          {/* Advanced Counter */}
          <div className="bg-cyan-500 rounded-xl flex flex-col items-center justify-center w-1/2">
            <div className="bg-gray-100 border border-gray-300 shadow-lg rounded-xl flex flex-col items-center justify-between w-1/2 h-80 py-8">
              <p className="text-xl text-gray-600">Advanced Counter</p>
              <h4 className="text-5xl font-bold text-blue-400">
                {simpleCounter}
              </h4>
              <div>
                <input
                  type="range"
                  name="steps"
                  id="steps"
                  max={20}
                  // value={stepsValue}
                />
                <p></p>
              </div>
              <div className="flex">
                <button
                  className="bg-red-400 border border-gray-400 rounded-lg p-2 w-1/3 px-4 text-center mx-2 font-bold text-gray-900 "
                  onClick={handleDecrease}
                >
                  -1
                </button>
                <button
                  className="bg-gray-200 border border-gray-400 rounded-lg p-2 w-1/3 px-4 text-center mx-2 font-bold text-gray-500 "
                  onClick={handleReset}
                >
                  Undo
                </button>
                <button
                  className="bg-gray-200 border border-gray-400 rounded-lg p-2 w-1/3 px-4 text-center mx-2 font-bold text-gray-500 "
                  onClick={handleReset}
                >
                  Reset
                </button>
                <button
                  className="bg-blue-400 border border-gray-400 rounded-lg p-2 w-1/3 px-4 text-center mx-2 font-bold text-gray-900 "
                  onClick={handleIncrease}
                >
                  +1
                </button>
              </div>
              <div>
                <p>History</p>
                <div>[1],[2]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
