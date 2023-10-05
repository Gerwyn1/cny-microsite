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

  const [staticLionScroll, setStaticLionScroll] = useState(false);

  console.log(randomNumber);

  console.log("static lion scroll: " + staticLionScroll);

  // START
  if (!lionDance && !lionScroll) {
    console.log("start");
    return (
      <div className={`m-auto relative p-2 `}>
        <img
          className="button3.1:max-h-[80vh]"
          src="/images/lion-cny.webp"
          alt="lion scroll"
        />
        <img
          className="absolute w-1/2 top-[50.5%] left-1/4"
          src="/images/rc_logo.png"
          alt="cruise"
        />
        <p className="w-[70%] button0:w-[75%] button2:w-[65%] text-xl button1:text-2xl top-[63.5%] left-[15.5%] button0:left-[13%] button0:top-[63.5%]  button2:text-3xl  leading-12 italic absolute  button0:text-2xl button1:top-[62.5%] button2:top-[60%] button3.1:top-[60%] text-white button2:left-[19%] button3:top-[61%] button3.1:text-3xl button3.1:w-[60%] button3.1:left-[20%]">
          Are you ready for an abundant new year filled with good luck?
        </p>
        <button
          onClick={() => {
            // lion dance
            setLionDance(true);
            // after 5 sec, roll down scroll with number
            setTimeout(() => {
              setLionScroll(true);
              setRandomNumber(() => generateRandomNumber());
            }, 5000);
          }}
          className="top-[81.5%]
          
          left-[24%] button0:left-[26%]
                                  
          
          
          py-1 px-10 text-base button1:text-lg  button1:left-[27%] button1:top-[81%] button1:px-10
          shadow-xl
             rounded-full  button2:text-2xl text-bold absolute  text-white bg-[#0171B8] focus:outline-0  button3:left-[28%] button3.1:left-[25%] button2:left-[25%] text-bold "
        >
          HUAT AH
        </button>
      </div>
    );
  }

  // MIDDLE (dancing lion)
  if (lionDance && !lionScroll) {
    console.log("middle");
    return (
      <div className="bg-[#FFE5BF] mx-6">
        <img
          className="xs:max-h-[80vh]"
          src="/animation/lion_dance.webp"
          alt="lion dance"
        />
      </div>
    );
  }

  // END (lion scroll with a random number)
  if (lionScroll) {
    console.log("ended");

    // after 4 sec, render static lion scroll (png)
    setTimeout(() => setStaticLionScroll(true), 4000);

    // render gif scroll (gif)
    return (
      <div className="bg-[#FFE5BF] mx-6">
        <img
          className="xs:max-h-[80vh]"
          src="/end_scene/end_scene.gif"
          alt="lion scroll"
        />
      </div>
    );
  }

  // END (static lion scroll with a random number)
  if (staticLionScroll) {
    console.log("render static lion scroll");
    return (
      <div className="bg-[#FFE5BF] mx-6">
        <img
          className="xs:max-h-[80vh]"
          src="/end_scene/end_scene.png"
          alt="static lion scroll"
        />
      </div>
    );
  }
}

export default App;
