import { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

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

  const [cloud, setCloud] = useState(false);

  console.log(lionDance);
  console.log(randomNumber);

  let { width, height } = useWindowSize();

  const isInitialRender = useRef();

  // console.log(window.screen.width / 2)

  useEffect(() => {
    console.log("test effect");
    if (isInitialRender.current) {
      console.log("test interval");
      document.body.style.background =
        "url('/animation/clouds.gif') center/contain no-repeat #FFE5BF";
      // after 5 sec, roll down scroll with number
      const timeoutId = setTimeout(() => {
        setLionScroll(true);
        setRandomNumber(() => generateRandomNumber());
      }, 5000);
      return () => clearInterval(timeoutId);
    }

    isInitialRender.current = true;
  }, [lionDance]);

  // START
  if (!lionDance && !lionScroll) {
    console.log("start");
    return (
      <>
        {/* <Confetti 
        className="absolute top-0 left-0"
        width={width} height={height}
        // confettiSource={{x: window.screen.width / 2, y : 0}}
        tweenDuration={50000}
        numberOfPieces={700}
        recycle={false}
        /> */}
        <div className="m-4 relative">
          <img
            className="h-[80vh] object-cover"
            src="/images/full-with-text.webp"
            alt="lion cny"
          />
          <img
            onClick={() => {
              setLionDance(true);
              setCloud(true);
            }}
            className="absolute bottom-[11.5%] left-[25.5%]
       w-[50%] h-[7%] object-contain cursor-pointer
        
        "
            src="/images/btn_huat.svg"
            alt="generate button"
          />
        </div>
      </>
    );
  }

  // END (lion scroll with a random number)
  if (lionScroll) {
    console.log("ended");

    // render gif scroll (gif)
    return (
      <div className="flex justify-center items-center">
        {/* lion-end-scroll */}
        <div className="relative">
          <LazyLoadImage
            className="absolute top-[4%] left-[30%] w-[38%] object-contain"
            src="/images/rc_logo.png"
            alt="royal caribbean"
          />
          <LazyLoadImage
            className="absolute top-[39.5%] left-[30%] w-[40%] z-[999] object-contain
            animate-easeInImg
            ease-in-out
            "
            src="/images/title.png"
            alt="title"
          />
          <LazyLoadImage
            className="absolute top-[50.5%] left-[21.5%] w-[57%] z-[999] 
            object-contain
            animate-easeInImg
            "
            src="/images/number_container.svg"
            alt="number container"
          />
          <LazyLoadImage
            className="absolute top-[82.5%] left-[23.5%] w-[25%] z-[999] object-contain"
            src="/images/btn_save.svg"
            alt="save"
          />
          <LazyLoadImage
            className="absolute top-[82.5%] left-[51.5%] w-[25%] z-[999] object-contain"
            src="/images/btn_again.svg"
            alt="try again"
          />
          <LazyLoadImage
            className="absolute top-[88.5%] left-[15%] w-[70%] z-[999] object-contain"
            src="/images/instructions.svg"
            alt="instructions"
          />
          <LazyLoadImage
            className="h-[80vh] object-cover relative"
            src="/animation/lion-scroll-loop-once.gif"
            alt="lion scroll"
          />
        </div>
      </div>
    );
  }

  // MIDDLE (dancing lion)
  if (lionDance) {
    console.log("middle");
    return (
      <LazyLoadImage
        className="h-[80vh] object-contain"
        src="/animation/animation.gif"
        alt="lion dance"
      />
    );
  }
}

export default App;
