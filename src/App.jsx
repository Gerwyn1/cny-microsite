import { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import useWindowSize from "react-use/lib/useWindowSize";

import "./App.css";
import ConfettiCannon from "./ConfettiCannon";

import { useReward } from 'react-rewards';

const randomDigit = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomDigitImage = (_) => `images/${randomDigit(0, 9)}.svg`;

function App() {
  const [lionDance, setLionDance] = useState(false);
  const [cloud, setCloud] = useState(false);
  const [lionScroll, setLionScroll] = useState(false);
  const [number, setNumber] = useState([]);

  console.log(0.0655729166666667 * window.innerHeight)
  
  const {reward: confettiReward, isAnimating: isConfettiAnimating} = useReward('confettiReward', 'confetti', {
    colors: [
      "#FEC504",
      "#DF5C3E",
      "#E67F5E",
      "#F2750F",
      "#DB4427",
      "#FEDB6E",
      "#FDCE40",
      "#F5A00F",
    ],
    elementCount: 75,
    elementSize: 0.0154166666666667 * window.innerHeight,
    startVelocity: 0.0655729166666667 * window.innerHeight,
    lifetime: window.innerWidth >= 2250 ? 250 : window.innerWidth >= 2500 ? (.1 * window.innerWidth) : 200,
    // decay: .93,
  });

// xxxxxxxxxxxxxxxxxx // 0.0655729166666667 * window.innerHeight

  console.log("lion dance: ", lionDance);
  console.log("cloud: ", cloud);
  console.log("lion scroll: ", lionScroll);
  console.log("number: ", number);

  let { width, height } = useWindowSize();

  const isInitialRender = useRef();

  // window.removeEventListener("resize", () => {});

  // console.log(window.screen.width / 2)


  useEffect(() => {
    if (isInitialRender.current) {
      document.body.style.background = cloud
        ? "url('animation/clouds.gif') center/contain no-repeat #FFE5BF"
        : "#FFE5BF";
      if (lionDance) {
        confettiReward()
        const timeoutId = setTimeout(() => {
          setNumber([
            randomDigitImage(),
            randomDigitImage(),
            randomDigitImage(),
            randomDigitImage(),
          ]);
          setLionScroll(true);
        }, 5000);
        return () => clearInterval(timeoutId);
      }
    }

    isInitialRender.current = true;
  }, [lionDance, cloud]);

  // START
  if (!lionDance && !lionScroll) {
    console.log("start screen");
    return (
      <>
        <div className="m-4 relative">
          <img
            className="h-[90vh] object-cover"
            src="images/start_lion.png"
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
            src="images/btn_huat.svg"
            alt="generate button"
          />
        </div>
      </>
    );
  }

  if (lionDance) {
    return (
      <>
        {/* <div className="absolute left-0 top-0 right-0 bottom-0">
          <Confetti
            width={width}
            height={height}
            className="w-full h-full"
            confettiSource={{ x: window.screen.width / 2, y: 0 }}
            tweenDuration={60000}
            numberOfPieces={400}
            initialVelocityY={0}
            gravity={0.2}
            recycle={false}
            colors={[
              "#FEC504",
              "#DF5C3E",
              "#E67F5E",
              "#F2750F",
              "#DB4427",
              "#FEDB6E",
              "#FDCE40",
              "#F5A00F",
            ]}
          />
        </div> */}
        {/* <ConfettiCannon /> */}
        <span id="confettiReward" className="fixed bottom-0 z-[10000]" />
        {lionScroll ? (
          <div className="flex justify-center items-center">
            {/* lion-end-scroll */}
            <div className="relative">
              <LazyLoadImage
                className="absolute top-[4%] left-[30%] w-[38%] object-contain"
                src="images/rc_logo.png"
                alt="royal caribbean"
              />
              <LazyLoadImage
                className="absolute top-[39.5%] left-[30%] w-[40%] z-[999] object-contain
              animate-easeInImg
              "
                src="images/title.png"
                alt="title"
              />
              <LazyLoadImage
                className="absolute top-[50.5%] left-[21.5%] w-[57%] z-[999] 
              object-contain
              animate-easeInImg
              "
                src="images/number_container.svg"
                alt="number container"
              />
              <LazyLoadImage
                className="absolute top-[82.5%] left-[23.5%] w-[25%] z-[999] object-contain cursor-pointer"
                src="images/btn_save.svg"
                alt="save"
              />
              <LazyLoadImage
                onClick={() => {
                  setLionDance(false);
                  setCloud(false);
                  setLionScroll(false);
                  setNumber([]);
                }}
                className="absolute top-[82.5%] left-[51.5%] w-[25%] z-[999] object-contain cursor-pointer"
                src="images/btn_again.svg"
                alt="try again"
              />
              <LazyLoadImage
                className="absolute top-[88.5%] left-[15%] w-[70%] z-[999] object-contain"
                src="images/instructions.svg"
                alt="instructions"
              />
              <LazyLoadImage
                className="h-screen object-cover relative"
                src="animation/end_lion_noloop.gif"
                alt="lion scroll"
              />
              {/* digit images */}
              {/* h-[4%] button0:h-[5%] button1.1:h-[6%] button2.1:h-[7%] button3.1:h-[8%] sm:h-[9%] */}
              <div className="absolute top-[58%] left-[24%] right-[24%] flex z-[1000] h-[9%] gap-1">
                <LazyLoadImage
                  className="object-contain h-full w-full
              animate-easeInImg m-auto
              "
                  src={randomDigitImage()}
                  alt="random digit"
                />
                <LazyLoadImage
                  className="object-contain h-full w-full
              animate-easeInImg m-auto
              "
                  src={randomDigitImage()}
                  alt="random digit"
                />
                <LazyLoadImage
                  className="object-contain h-full w-full
              animate-easeInImg m-auto
              "
                  src={randomDigitImage()}
                  alt="random digit"
                />
                <LazyLoadImage
                  className="object-contain h-full w-full
              animate-easeInImg m-auto
              "
                  src={randomDigitImage()}
                  alt="random digit"
                />
              </div>
              {/* <div
                className="absolute
              top-[58.5%] left-[24%] z-[999] h-[9%] w-[12%]"
              >
                <LazyLoadImage
                  className="object-cover h-full
              animate-easeInImg m-auto
              "
                  src={randomDigitImage()}
                  alt="random digit"
                />
              </div>
              <div
                className="absolute
                top-[58.5%] left-[37%] z-[999] h-[9%] w-[12%]"
              >
                <LazyLoadImage
                  className="object-cover h-full
              animate-easeInImg m-auto
              "
                  src={randomDigitImage()}
                  alt="random digit"
                />
              </div>
              <div
                className="absolute
              top-[58.5%] left-[50%] z-[999] h-[9%] w-[12%]"
              >
                <LazyLoadImage
                  className="object-cover h-full
              animate-easeInImg m-auto
              "
                  src={randomDigitImage()}
                  alt="random digit"
                />
              </div>
              <div
                className="absolute
              top-[58.5%] left-[64%] z-[999] h-[9%] w-[12%]"
              >
                <LazyLoadImage
                  className="object-cover h-full
              animate-easeInImg m-auto
              "
                  src={randomDigitImage()}
                  alt="random digit"
                />
              </div> */}
            </div>
          </div>
        ) : (
          <LazyLoadImage
            className="h-[80vh] object-contain"
            src="animation/animation.gif"
            alt="lion dance"
          />
        )}
      </>
    );
  }
}

export default App;
