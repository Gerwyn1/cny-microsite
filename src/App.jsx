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
      <div className="relative m-4">
        <img
          src="/images/lion-cny.webp"
          alt="lion cny"
          className="common:h-[90vh] object-cover"
        />
        {/* cruise, text & button container */}
        <div className="flex flex-col absolute top-[50%] 
        left-[18%] right-[18%]
        sm:left-[15%] sm:right-[15%]
        4xl:left-[13%] 4xl:right-[13%]

        gap-8
        button2:gap-10
        sm:gap-14
        common:gap-8
        2xl:gap-10
        3xl:gap-12
        4xl:gap-16
        6xl:gap-24
        ">
          {/* cruise image */}
          <div className=" relative">
            <img className='w-[75%] mx-auto' src="/images/rc_logo.png" alt="cruise" />
          </div>

          {/* text & button container */}
          <div className="flex flex-col gap-2 button1:gap-2 button5:gap-3 4xl:gap-5 5xl:gap-7">
            {/* text */}
            <p
              className="text-white text-center mx-auto
                text-xl leading-[1.3rem] 
                button0:text-2xl button0:leading-[1.5rem]
                button1:leading-[1.6rem] 
                button1.1:leading-[1.8rem]
                xs:text-3xl
                button3.1:leading-[2.4rem]
                button4:text-4xl
                button5:leading-[2.9rem]
                sm:leading-[3.2rem]
                sm:text-5xl
                common:text-3xl
                2xl:text-4xl
                3xl:leading-[2.9rem]
                4xl:text-5xl
                5xl:text-6xl
                6xl:text-8xl
            "
            >
              Are you ready for an abundant new year filled with good luck?
            </p>
            {/* button */}
            <button
              onClick={() => setLionDance(true)}
              className="shadow-xl rounded-full text-bold  text-white bg-[#0171B8] focus:outline-0 mx-auto
          text-base
          py-0 xs:py-1 5xl:py-2 6xl:py-4
          px-6 xs:px-8 5xl:px-12 6xl:px-20
          button0:text-xl
          button1.1:text-xl
          button2:text-2xl
          button4:text-3xl
          button5:text-5xl
          common:text-2xl
          2xl:text-3xl
          3xl:text-4xl
          5xl:text-5xl
          6xl:text-7xl
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
