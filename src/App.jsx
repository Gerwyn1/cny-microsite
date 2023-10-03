// import { useState } from "react";

import "./App.css";

function App() {
  // const [play, setPlay] = useState(0)
  return (
    <div className="m-auto">
      <div className="relative flex flex-col p-2">
        <img src="/images/lion-cny.webp" alt="lion scroll" />
        <img
          className="absolute w-1/2 top-[50.5%] left-1/4"
          src="/images/rc_logo.png"
          alt="cruise"
        />
        <p className="text-white text-lg button2:text-3xl sm:text-5xl leading-12 italic absolute w-[65%] top-[60.5%] left-[16.5%]">
          Are you ready for an abundant new year filled with good luck?
        </p>
        <button className="left-[20%] px-8 rounded-full button1:top-[85%] button1:text-sm button2:text-2xl text-3xl sm:text-5xl text-bold absolute top-[80.5%]  sm:left-[18%] py-2 button1:px-16 text-white bg-[#0171B8] focus:outline-0 button4:left-[27%] button3:left-[20%] button2:left-[18%] button1:left-[22%]">
          HUAT AH
        </button>
      </div>
    </div>
  );
}

export default App;
