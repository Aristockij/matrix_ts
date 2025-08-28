"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PersonMatrix from "@/components/MatrixInfo/PersonMatrix";
import { useMatrixPreview, useMatrix } from "@/hooks/useMatrix";

const index = () => {
  const [matrixData, setMatrixData] = useState(null);

  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const birthDate = searchParams.get("birthDate");
  const name2 = searchParams.get("name2");
  const birthDate2 = searchParams.get("birthDate2");
  const isFinance = searchParams.get("isFinance");
  const isPerson = searchParams.get("isPerson");
  const isSovmest = searchParams.get("isSovmest");

  const { mutate: nonPay } = useMatrixPreview({
    onSuccess: (data) => {
      setMatrixData(data.data);
    },
  });

  const value = {
    name,
    birthDate,
    name2,
    birthDate2,
    serviceCode:
      (isFinance && "FINANCE_MATRIX") ||
      (isPerson && "PERSONAL_MATRIX") ||
      (isSovmest && "RELATION_MATRIX"),
  };

  useEffect(() => {
    nonPay(value);
  }, []);

  return (
    <PersonMatrix
      data={matrixData}
      name={name}
      date={birthDate}
      name2={name2}
      date2={birthDate2}
      serviceCode={value.serviceCode}
    />
  );
};
export default index;
