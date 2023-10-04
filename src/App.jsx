import { useState } from "react";

import "./App.css";

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10000);
  const formattedNumber = String(randomNumber).padStart(4, "0");
  return formattedNumber;
}

function App() {
  const [lionDance, setLionDance] = useState(false);

  const [lionScroll, setLionScroll] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);

  console.log(randomNumber);

  // START
  if (!lionDance && !lionScroll) {
    console.log("start");
    return (
      <div className="m-auto relative p-2">
        <img src="/images/lion-cny.webp" alt="lion scroll" />
        <img
          className="absolute w-1/2 top-[50.5%] left-1/4"
          src="/images/rc_logo.png"
          alt="cruise"
        />
        <p className="text-white text-lg button2:text-3xl sm:text-5xl leading-12 italic absolute w-[65%] top-[60.5%] left-[16.5%]">
          Are you ready for an abundant new year filled with good luck?
        </p>
        <button
          onClick={() => {
            setLionDance(true);
            setTimeout(() => {
              setLionScroll(true);
              setRandomNumber(() => generateRandomNumber());
            }, 4000);
          }}
          className="left-[29.5%] button0:left-[31%] px-8 rounded-full button1:top-[85%] text-xs button1:text-sm button2:text-2xl  sm:text-5xl text-bold absolute top-[80.5%]  sm:left-[18%] py-2 button1:px-16 text-white bg-[#0171B8] focus:outline-0 button4:left-[27%] button3:left-[20%] button2:left-[18%] button1:left-[22%]"
        >
          HUAT AH
        </button>
      </div>
    );
  }

  // MIDDLE
  if (lionDance && !lionScroll) {
    console.log("middle");
    return (
      <div className="bg-[#FFE5BF] h-screen">
        <img
          src="/animation/animation.gif"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
          alt="lion dance"
        />
      </div>
    );
  }

  // END
  if (lionScroll) {
    console.log("ended");
    return (
      <div className="bg-[#FFE5BF] h-screen">
        <img
          src="/end_scene/end_scene.gif"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
          alt="lion scroll"
        />
      </div>
    );
  }
}

export default App;
