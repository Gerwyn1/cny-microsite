import { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

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

  const isInitialRender = useRef();

  // useEffect(() => {
  //   if (isInitialRender.current) {
  //     // after 5 sec, roll down scroll with number
  //     const timeoutId = setTimeout(() => {
  //       setLionScroll(true);
  //       setRandomNumber(() => generateRandomNumber());
  //     }, 5000);
  //     return () => clearInterval(timeoutId);
  //   }

  //   isInitialRender.current = true;
  // }, [lionDance]);

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
          className="absolute w-[45%] top-[50.5%] left-[28%]"
          src="/images/rc_logo.png"
          alt="cruise"
        />
        <p
          className="text-white leading-12 absolute text-center
          text-lg button1:text-xl button2:text-2xl button2.1:text-3xl
          w-[62.5%] button2:w-1/2 button2.1:w-2/3
          top-[63%] button2:top-[61%] button2.1:top-[62%]
          left-[19%] button2:left-[24.5%] button2.1:left-[17%]
        "
        >
          Are you ready for an abundant new year filled with good luck?
        </p>
        <button
          onClick={() => setLionDance(true)}
          className="shadow-xl rounded-full text-bold absolute text-white bg-[#0171B8] focus:outline-0
          text-lg button2.1:text-2xl
          px-12 
          py-1 
          top-[80%] button2:top-[82%]
          left-[19%] button0:left-[21%] button1:left-[23%] button1.1:left-[25%] button2:left-[26%] button2.1:left-[23.5%] button3:left-[26%]
          "
        >
          HUAT AH
        </button>
      </div>
    );
  }

  // END (lion scroll with a random number)
  if (lionScroll) {
    console.log("ended");

    // render gif scroll (gif)
    return (
      <div className="bg-[#FFE5BF] mx-6 relative">
        <img
          className="xs:max-h-[80vh]"
          src="/end_scene/end_scene.gif"
          alt="lion scroll"
        />
      </div>
    );
  }

  // MIDDLE (dancing lion)
  if (lionDance) {
    console.log("middle");
    return (
      <div className="bg-[#FFE5BF] mx-6">
        <LazyLoadImage
          className="xs:max-h-[80vh]"
          src="/animation/lion_dance.webp"
          alt="lion dance"
        />
      </div>
    );
  }
}

export default App;
