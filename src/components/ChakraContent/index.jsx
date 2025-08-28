"use client";
import Image from "next/image";
import s from "./index.module.scss";
import { useEffect, useState, useRef } from "react";

const index = ({ data }) => {
  const [chakraData, setChakraData] = useState(null);

  const ref = useRef(null);
  const [positions, setPositions] = useState({
    A: { x: 0, y: 0, w: 0 },
    B: { x: 0, y: 0, w: 0 },
    C: { x: 0, y: 0, w: 0 },
    D: { x: 0, y: 0, w: 0 },

    E: { x: 0, y: 0, w: 0 },

    F: { x: 0, y: 0, w: 0 },
    G: { x: 0, y: 0, w: 0 },
    H: { x: 0, y: 0, w: 0 },
    I: { x: 0, y: 0, w: 0 },

    J: { x: 0, y: 0, w: 0 },
    K: { x: 0, y: 0, w: 0 },
    L: { x: 0, y: 0, w: 0 },

    M: { x: 0, y: 0, w: 0 },
    N: { x: 0, y: 0, w: 0 },

    O: { x: 0, y: 0, w: 0 },
    P: { x: 0, y: 0, w: 0 },

    Q: { x: 0, y: 0, w: 0 },
    R: { x: 0, y: 0, w: 0 },

    S: { x: 0, y: 0, w: 0 },
    T: { x: 0, y: 0, w: 0 },

    U: { x: 0, y: 0, w: 0 },
    V: { x: 0, y: 0, w: 0 },

    W: { x: 0, y: 0, w: 0 },

    X: { x: 0, y: 0, w: 0 },

    Y: { x: 0, y: 0, w: 0 },
    Z: { x: 0, y: 0, w: 0 },

    1: { x: 0, y: 0, w: 0 },
    2: { x: 0, y: 0, w: 0 },

    3: { x: 0, y: 0, w: 0 },
    4: { x: 0, y: 0, w: 0 },

    5: { x: 0, y: 0, w: 0 },
    6: { x: 0, y: 0, w: 0 },
  });

  useEffect(() => {
    if (data) {
      setChakraData(data?.calc);
    }
    if (data && !data.calc) {
      setChakraData(data);
    }
  }, [data]);

  const update = () => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    setPositions({
      A: { x: width * 0.12, y: height * 0.5, w: width * 0.07 },
      B: { x: width * 0.5, y: height * 0.12, w: width * 0.07 },
      C: { x: width * 0.88, y: height * 0.5, w: width * 0.07 },
      D: { x: width * 0.5, y: height * 0.88, w: width * 0.07 },

      E: { x: width * 0.5, y: height * 0.5, w: width * 0.07 },

      F: { x: width * 0.23, y: height * 0.23, w: width * 0.07 },
      G: { x: width * 0.767, y: height * 0.23, w: width * 0.07 },
      H: { x: width * 0.23, y: height * 0.77, w: width * 0.07 },
      I: { x: width * 0.767, y: height * 0.77, w: width * 0.07 },

      K: { x: width * 0.565, y: height * 0.695, w: width * 0.035 },
      J: { x: width * 0.63, y: height * 0.63, w: width * 0.035 },
      L: { x: width * 0.693, y: height * 0.57, w: width * 0.035 },

      M: { x: width * 0.5, y: height * 0.2, w: width * 0.05 },
      N: { x: width * 0.5, y: height * 0.25, w: width * 0.035 },

      O: { x: width * 0.5, y: height * 0.76, w: width * 0.035 },
      P: { x: width * 0.5, y: height * 0.81, w: width * 0.05 },

      Q: { x: width * 0.24, y: height * 0.505, w: width * 0.035 },
      R: { x: width * 0.19, y: height * 0.505, w: width * 0.05 },

      S: { x: width * 0.76, y: height * 0.505, w: width * 0.035 },
      T: { x: width * 0.805, y: height * 0.505, w: width * 0.05 },

      U: { x: width * 0.57, y: height * 0.505, w: width * 0.05 },
      V: { x: width * 0.615, y: height * 0.505, w: width * 0.035 },

      W: { x: width * 0.5, y: height * 0.365, w: width * 0.035 },

      X: { x: width * 0.36, y: height * 0.505, w: width * 0.035 },

      Y: { x: width * 0.32, y: height * 0.325, w: width * 0.035 },
      Z: { x: width * 0.28, y: height * 0.285, w: width * 0.05 },

      1: { x: width * 0.68, y: height * 0.69, w: width * 0.035 },
      2: { x: width * 0.715, y: height * 0.72, w: width * 0.05 },

      3: { x: width * 0.28, y: height * 0.72, w: width * 0.05 },
      4: { x: width * 0.32, y: height * 0.69, w: width * 0.035 },

      5: { x: width * 0.68, y: height * 0.325, w: width * 0.035 },
      6: { x: width * 0.715, y: height * 0.285, w: width * 0.05 },
    });
  };

  useEffect(() => {
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [ref.current]);

  const initialArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "K",
    "J",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
  ];

  return (
    <>
      {!chakraData && "loading..."}
      {chakraData && (
        <div className={s.chakra} ref={ref}>
          <Image
            src='/chakra/chakra.png'
            width={203}
            height={360}
            alt='card matrix'
            onLoad={() => {
              update();
            }}
          />
          {initialArr.map((key) => (
            <div
              key={key}
              className={s[`chakra_${key.toLowerCase()}`]}
              style={{
                "--x": `${positions[key].x}px`,
                "--y": `${positions[key].y}px`,
                "--w": `${positions[key].w}px`,
                "--offset-x": "-50%",
                "--offset-y": "-50%",
              }}
            >
              {chakraData[key]}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default index;
