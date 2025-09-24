"use client";

import s from "./index.module.scss";
import { useEffect, useState, useRef } from "react";
import SvgChakra from "@/components/SvgChakra";

const index = ({ data }) => {
  const [chakraData, setChakraData] = useState(null);

  useEffect(() => {
    if (data) {
      setChakraData(data?.calc);
    }
    if (data && !data.calc) {
      setChakraData(data);
    }
  }, [data]);

  return (
    <>
      {!chakraData && "loading..."}
      {chakraData && (
        <div className={s.chakra}>
          <SvgChakra data={chakraData} />
        </div>
      )}
    </>
  );
};
export default index;
