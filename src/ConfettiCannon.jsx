import React, { useState, useRef } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";

const MAX_CONFETTIS = 200;
const FIRE_DELAY = 700;

const COLOR_BACKGROUND = "#f5f5f5";

const getConfettiLaunchValue = (index, value) => {
  switch (index) {
    case 0:
      return 0;
    case 1:
      return (value / 5) * 3;
    case 2:
      return (value / 5) * 4.5;
    case 3:
      return (value / 5) * 4.8;
    case 4:
      return (value / 5) * 4.9;
    default:
      return 0;
  }
};

const useStyles = makeStyles(() => {
  const confettis = {};
  const confettiAnims = {};

  [...Array(MAX_CONFETTIS)].forEach((val, i) => {
    let x = Math.random() * window.innerWidth / 2;
    let y = Math.random() * -window.innerHeight;
    let rotation = Math.random() * 360;
    let opacity = 0;

    confettiAnims[`@keyframes confettiAnim${i}`] = Object.fromEntries(
      [...Array(51)].map((item, j) => {
        if (j > 0 && opacity !== 1) {
          opacity += 0.5;
        }
        
        if (j > 4 && y < 125) {
          // how fast confetti falls
          y = y + (16 + Math.random() * 32);
          // rotation of confetti pieces
          rotation = rotation + (10 + Math.random() * 30);
        }

        if (j <= 4) {
          return [
            `${j * 2}%`,
            {
              
              opacity: opacity,
              transform: `translate3d(${getConfettiLaunchValue(
                j,
                x
              )}px, ${getConfettiLaunchValue(
                j,
                y
              )}px, 0) rotateY(${rotation}deg) rotateX(${rotation}deg) rotateZ(${rotation}deg) `,
            },
          ];
        }
        // skew(${skew}deg

        return [
          `${j * 2}%`,
          {
            opacity: opacity,
            transform: `translate3d(${x}px, ${y}px, 0) rotateY(${rotation}deg) rotateX(${rotation}deg) rotateZ(${rotation}deg) `,
          },
        ];
      })
    );

   
    confettis["&.confetti-" + i] = {
      animation: `$confettiAnim${i} 6s ${FIRE_DELAY + 250}ms forwards`,
    };
  });

  return {
    ...confettiAnims,
    confetti: {
      position: "fixed",
      left: '25%',
      zIndex:9999,
      bottom:0,
      width: '1vw',
      height: '1vh',
      backgroundColor: "#FEC504",
      opacity: 0,
      ...confettis,
      "&:nth-child(odd)": {
        backgroundColor: "#DF5C3E",
      },
    },
  };
});

function ConfettiCannon() {
  const classes = useStyles();
  const [hasConfettiLaunched, launchConfetti] = useState(true);

  const [numOfConfetti, setnumOfConfetti] = useState(450);

  // LAUNCH CONFETTIaaaaaaa
  // launchConfetti(true);
  // cleanUpConfetti(false);

  // CLEAN UP CONFETTI
  // cleanUpConfetti(true);
  //           setTimeout(() => {
  //             launchConfetti(false);
  //           }, 1500);

  return ( // 11111
  <div className="absolute bottom-0">
  {hasConfettiLaunched &&
    [...Array(numOfConfetti)].map((val, i) => (
      <div
        className={` ${classes.confetti} confetti-${i}`}
        key={i}
      />
    ))}
</div>
  );
}

export default ConfettiCannon;


