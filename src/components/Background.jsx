import React, { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import CELLS from "vanta/dist/vanta.cells.min";
import GLOBE from "vanta/dist/vanta.globe.min";
import { useRecoilState } from "recoil";
import { backgroundAtom } from "../atoms/BackgroundAtom";
import * as THREE from "three";

const effectConfig = {
  fog: {
    module: FOG,
    options: {
      highlightColor: 0x5eca9a,
      midtoneColor: 0x569dd9,
      lowlightColor: 0x6969b9,
      baseColor: 0xc9dec9,
      blurFactor: 0.45,
      speed: 0.6,
    },
  },
  clouds: {
    module: CLOUDS,
    options: {
      minHeight: 200.0,
      minWidth: 200.0,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      speed: 0.7,
    },
  },
  cells: {
    module: CELLS,
    options: {
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      color1: 0x69dede,
      color2: 0x45637f,
      size: 1.0,
    },
  },
  globe: {
    module: GLOBE,
    options: {
      minHeight: 200.0,
      minWidth: 200.0,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x6088de,
      color2: 0xaddef5,
      size: 0.6,
      backgroundColor: 0x212525,
    },
  },
};

function VantaBackground({ effect }) {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (vantaRef.current) {
      if (vantaEffect) vantaEffect.destroy();
      const Effect = effectConfig[effect]?.module;
      if (Effect) {
        setVantaEffect(
          Effect({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            ...effectConfig[effect].options,
          })
        );
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [effect]);

  return <div ref={vantaRef} className="absolute inset-0"></div>;
}

export default function Background() {
  const [background] = useRecoilState(backgroundAtom);

  let activeEffect = null;
  if (background.clouds) activeEffect = "clouds";
  if (background.cells) activeEffect = "cells";
  if (background.fog) activeEffect = "fog";
  if (background.globe) activeEffect = "globe";

  return <VantaBackground effect={activeEffect} />;
}
