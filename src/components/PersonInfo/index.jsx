"use client";

import Info from "./Info";
import Calc from "./Calc";
import History from "./History";
import Services from "./Services";
import BtnsLinks from "../BtnsLinks";
import { useStore } from "../../store/indexBtn";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const PersonInfo = () => {
  const indexStore = useStore((state) => state.index);
  const setIndexStore = useStore((state) => state.setIndex);

  const searchParams = useSearchParams();
  const dataIndex = searchParams.get("data");

  useEffect(() => {
    if (dataIndex) {
      setIndexStore(Number(dataIndex));
    }
  }, [dataIndex]);

  return (
    <>
      <BtnsLinks />

      {indexStore === 0 && <Info />}
      {indexStore === 1 && <Calc />}
      {indexStore === 2 && <History />}
      {indexStore === 3 && <Services />}
    </>
  );
};
export default PersonInfo;
