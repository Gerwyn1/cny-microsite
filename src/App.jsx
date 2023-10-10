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
      <div className="relative">
        <img
          src="/images/lion-cny.webp"
          alt="lion cny"
          className="xs:h-[80vh] object-cover"
        />
        {/* cruise, text & button container */}
        <div className="flex flex-col gap-8 absolute top-[50%] left-[18%] xs:w-2/3 w-full">
          <div className=" relative">
            <img className='w-[75%] mx-auto' src="/images/rc_logo.png" alt="cruise" />
          </div>

          {/* text & button container */}
          <div className="flex flex-col gap-1 button1:gap-2">
            <p
              className="text-white text-center  
              
               mx-auto
                text-base leading-[1.3rem]
                button0:text-lg button0:leading-[1.5rem]
                button1:text-xl button1:leading-[1.6rem]
                button1.1:text-2xl button1.1:leading-[1.8rem]
                xs:text-xl xs:leading-[1.5rem]
            "
            >
              Are you ready for an abundant new year filled with good luck?
            </p>
            <button
              onClick={() => setLionDance(true)}
              className="shadow-xl rounded-full text-bold  text-white bg-[#0171B8] focus:outline-0 mx-auto
          text-base
          button1:text-lg
          button1.1:text-xl
          xs:text-lg
          py-0
          px-6
            "
            >
              HUAT AH
            </button>
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
      <div className="bg-[#FFE5BF] mx-6">
        <img
          className="xs:h-[80vh] object-cover"
          src="/end_scene/lion-scroll-loop-once.gif"
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
          className="xs:h-[80vh] object-cover"
          src="/animation/lion_dance.webp"
          alt="lion dance"
        />
      </div>
    );
  }
}

export default App;
