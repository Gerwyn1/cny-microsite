import React, { useState, useRef } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";

const MAX_CONFETTIS = 500;
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
  const spikes = {};
  const confettis = {};
  const confettiAnims = {};

  [...Array(MAX_CONFETTIS)].forEach((val, i) => {
    let x = Math.random() * -525 + 100;
    let y = Math.random() * -2000 - 100;
    let rotation = Math.random() * 360;
    let skew = Math.random() * 25;
    let opacity = 0;

    confettiAnims[`@keyframes confettiAnim${i}`] = Object.fromEntries(
      [...Array(51)].map((item, j) => {
        // opacity of confetti
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
                x + 150
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
            transform: `translate3d(${x + 150}px, ${y}px, 0) rotateY(${rotation}deg) rotateX(${rotation}deg) rotateZ(${rotation}deg) `,
          },
        ];
      })
    );

   
    confettis["&.confetti-" + i] = {
      animation: `$confettiAnim${i} 6s ${FIRE_DELAY + 250}ms forwards`,
    };
  });

  return {
  
    cleanUp: {},
    confettiLaunched: {},
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    confettiParty: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      // width: 200,
      // height: 400,
    },
    cannonContainer: {
      position: "relative",
      bottom: -50,
      zIndex: 10,
      "$cleanUp &": {
        animation: "$cleanupCannon 1.5s",
        zIndex: "auto",
      },
    },
    confettiContainer: {
      position: "relative",
      // width: 200,
    },
    cannonChase: {
      // height: 100,
      // width: 120,
      backgroundColor: "#7451eb",
      position: "absolute",
      transform: "rotate(0deg)",
      top: -40,
      right: -50,
  
      "&:before, &:after": {
        content: "''",
        position: "absolute",
        bottom: 0,
        // height: 80,
        // width: 30,
        borderRadius: "50%",
        backgroundColor: COLOR_BACKGROUND,
      },
      "&:before": {
        left: -15,
      },
      "&:after": {
        right: -15,
      },
    },

    ...confettiAnims,
    confetti: {
      position: "absolute",
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
  const [hasCleanedUp, cleanUpConfetti] = useState(false);

  const [numOfConfetti, setnumOfConfetti] = useState(450);

  // LAUNCH CONFETTI
  // launchConfetti(true);
  // cleanUpConfetti(false);

  // CLEAN UP CONFETTI
  // cleanUpConfetti(true);
  //           setTimeout(() => {
  //             launchConfetti(false);
  //           }, 1500);

  return (
    <div
      className={`${classNames(classes.container, {
        [classes.cleanUp]: hasCleanedUp,
        [classes.confettiLaunched]: hasConfettiLaunched,
      })} absolute bottom-[-25%] left-1/2 z-[9999]`}
    >
      {/* CONFETTI PARTY */}
      <div className={classes.confettiParty}>
        {/* CONFETTI CANNON */}
        <div className={classes.cannonContainer} data-testid="cannon">
          <div className={classes.cannonChase}>
            <div />
          </div>
        </div>
        {/* CONFETTI CONTAINER */}
        <div className="confetti-container">
          {hasConfettiLaunched &&
            [...Array(numOfConfetti)].map((val, i) => (
              <div
                className={`${classes.confetti} confetti-${i}`}
                key={i}
                data-testid="confetti"
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ConfettiCannon;
