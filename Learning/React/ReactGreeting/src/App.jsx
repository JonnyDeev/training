

import "./App.css";
import GreetingCard from "./components/GreetingCard";

function App() {
  

  return (
    <>
      <div className="flex justify-center items-center max-h-screen w-screen">
        {/* Cards container */}
        <div className="flex flex-col w-full md:flex-row">
          {/* greeting card */}
          <GreetingCard name="Jonny" emoji={"🙌"} />
          <GreetingCard name="Lilia" emoji={"🔥"} />
          <GreetingCard name="Javier" emoji={"⭐"} />
        </div>
      </div>
    </>
  );
}

export default App;
