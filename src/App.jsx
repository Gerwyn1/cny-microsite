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
      <div
        className="bg-lion-cny bg-contain bg-center bg-no-repeat
    m-auto 
    max-w-[226px] xs:min-w-[250px] sm:min-w-[430px] md:min-w-[600px]

    3xl:bg-auto 3xl:pt-[40rem] 3xl:pb-[16rem]

    pt-[13.5rem] xs:pt-[14.5rem]  sm:pt-[19rem] md:pt-[22.5rem]
   
    
    pb-[3.5rem] sm:pb-[4rem] md:pb-[5rem]
    "
      >
        {/* container - cruise image & text/button */}
        <div
          className="flex flex-col 
        mx-auto
        gap-7 xs:gap-6 sm:gap-10
        w-[90%] xs:w-[70%]
        "
        >
          {/* cruise image */}
          <img
            src="/images/rc_logo.png"
            alt="cruise"
            className="m-auto 
            w-1/2 xs:w-[60%] sm:w-1/2 md:w-[40%] 3xl:w-[70%]"
          />
          {/* container - text & button */}
          <div
            className="flex flex-col 
            gap-1 sm:gap-2
            "
          >
            {/* text */}
            <p
              className="text-white text-center mx-auto
              w-[70%] leading-[1.2rem]
              xs:text-lg xs:leading-[1.5rem] xs:w-[80%] 
              sm:text-2xl sm:leading-[1.8rem] sm:w-[70%]
              md:text-3xl md:leading-[2.3rem] md:w-[60%]
              3xl:text-5xl 3xl:w-[90%]
          "
            >
              Are you ready for an abundant new year filled with good luck?
            </p>
            {/* button */}
            <button
              onClick={() => setLionDance(true)}
              className="shadow-xl rounded-full text-bold  text-white bg-[#0171B8] focus:outline-0 mx-auto
            py-0 sm:py-1
            px-4  sm:px-9
           
            sm:text-xl
            3xl:text-5xl
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
