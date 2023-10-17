import { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useReward } from "react-rewards";

import "./App.css";

const randomDigit = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const randomDigitImage = () => `images/${randomDigit(0, 9)}.svg`;

function App() {
  const [cloud, setCloud] = useState(false);
  const [lionDance, setLionDance] = useState(false);
  const [lionScroll, setLionScroll] = useState(false);
  const [number, setNumber] = useState([]);

  const { reward: confettiReward } = useReward("confettiReward", "confetti", {
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
    elementCount: 100,
    elementSize: 0.0154166666666667 * window.innerHeight,
    startVelocity: 0.0855729166666667 * window.innerHeight,
    lifetime: 1200,
  });

  const isInitialRender = useRef();

  useEffect(() => {
    if (isInitialRender.current) {
      document.body.style.background = cloud
        ? "url('animation/clouds3.gif') center/contain no-repeat #FFE5BF"
        : "#FFE5BF";
      if (lionDance) {
        const timeoutConfetti = setTimeout(() => confettiReward(), 1500);

        const timeoutScroll = setTimeout(() => {
          setNumber([
            randomDigitImage(),
            randomDigitImage(),
            randomDigitImage(),
            randomDigitImage(),
          ]);
          setLionScroll(true);
        }, 5000);

        return () =>
          clearInterval(() => {
            timeoutConfetti();
            timeoutScroll();
          });
      }
    }

    isInitialRender.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lionDance, cloud]);

  if (!lionDance && !lionScroll) {
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
        <span id="confettiReward" className="fixed bottom-0 z-[10000]" />
        {lionScroll ? (
          <div className="flex justify-center items-center">
            <div className="relative">
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
                className="h-screen object-cover relative"
                src="animation/end_lion_once_compressed.gif"
                alt="lion scroll"
              />
              <div className="absolute top-[57%] left-[24%]  right-[24%] flex z-[1000] h-[8%] gap-1">
                <LazyLoadImage
                  className="h-full basis-1/4
              animate-easeInImg m-auto
              "
                  src={number[0]}
                  alt="random digit"
                />
                <LazyLoadImage
                  className="h-full basis-1/4
              animate-easeInImg m-auto
              "
                  src={number[1]}
                  alt="random digit"
                />
                <LazyLoadImage
                  className="h-full basis-1/4
              animate-easeInImg m-auto
              "
                  src={number[2]}
                  alt="random digit"
                />
                <LazyLoadImage
                  className="h-full basis-1/4
              animate-easeInImg m-auto
              "
                  src={number[3]}
                  alt="random digit"
                />
              </div>
            </div>
          </div>
        ) : (
          <LazyLoadImage
            className="h-[80vh] object-contain"
            src="animation/lion_dance3.gif"
            alt="lion dance"
          />
        )}
      </>
    );
  }
}

export default App;
