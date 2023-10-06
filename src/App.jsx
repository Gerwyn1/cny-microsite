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
      <div className={`m-auto relative p-2`}>
        <div className="bg-lion-cny  bg-contain bg-center bg-no-repeat  relative min-h-[700px] 2xl:h-[80vh] flex flex-col">
          <div className="flex-[4]"></div>
          <div className="relative flex-1 flex flex-col gap-4">
            <div className="">
              <img
                className="w-[50%] mx-auto"
                src="/images/rc_logo.png"
                alt="cruise"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p
                className="text-white text-center 
            text-xl 
            w-1/2 
            mx-auto
            
           
        "
              >
                Are you ready for an abundant new year filled with good luck?
              </p>
              <button
                onClick={() => setLionDance(true)}
                className="shadow-xl rounded-full text-bold relative text-white bg-[#0171B8] focus:outline-0
          text-xl
          w-fit
          "
              >
                HUAT AH
              </button>
            </div>
          </div>
        </div>
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
