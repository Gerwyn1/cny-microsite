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
      // entire container that expands/contracts if screen adjusted
      <div className="m-auto 
       max-w-[286px]
      button4:max-w-[400px]
      
      ">

        <div className="bg-lion-cny  bg-contain bg-center bg-no-repeat min-h-[700px] 2xl:h-[80vh] flex flex-col
        ">

          {/* push inner content downwards */}
          <div className="
          flex-[2] button0:flex-[2.2] button1:flex-[2.7] button4:flex-[4.3]
          "></div>
          {/* bottom container */}
          <div className=" flex-1 flex flex-col 
          gap-7 button4:gap-10
          px-7 button4:px-14
          
          ">
            <div className="">
              {/* cruise image */}
              <img
                className="mx-auto 
                w-[70%] button4:w-[60%]
                "
                src="/images/rc_logo.png"
                alt="cruise"
              />
            </div>
            {/* container - text & button */}
            <div className="flex flex-col 
            gap-2
            
            
            ">
              {/* text */}
              <p
                className="text-white text-center
                text-lg leading-[1.25rem]
                button1.1:w-[90%]
                button0:text-xl button0:leading-[1.4rem]
                button1:text-2xl button1:leading-[1.7rem]
                button4:text-3xl button4:leading-[2.1rem]
                mx-auto

        "
              >
                Are you ready for an abundant new year filled with good luck?
              </p>
              {/* button */}
              <button
                onClick={() => setLionDance(true)}
                className="shadow-xl rounded-full text-bold  text-white bg-[#0171B8] focus:outline-0
          text-sm button1:text-base button4:text-2xl
          
          py-1
          px-6 button4:px-8
          mx-auto
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
