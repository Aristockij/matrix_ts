import { useEffect, useState } from "react";
import { useGetItems } from "./useGetItems";
import { useGetCalculation } from "./useGetCalculation";

interface TypeProps {
  valueMatrix: {
    name: string;
    birthDate: string;
    name2?: string;
    birthDate2?: string;
    serviceCode: string;
    userItemId: string | null | number;
  };
  serviceCode: string;
  setValueMatrix: any;
}

export const useItemsMatrixCalc = ({
  valueMatrix,
  serviceCode,
  setValueMatrix,
}: TypeProps) => {
  const { data: userItems } = useGetItems();
  const { data: calculationItems, isLoading } = useGetCalculation();

  // console.log("userItems: ", userItems);

  const [currentId, setCurrentId] = useState(null);
  const [isPayd, setIsPayd] = useState(false);
  const [counterItem, setCounterItem] = useState(0);

  const matchCode =
    (serviceCode === "FINANCE_MATRIX" && "PRODUCT_MATRIX_FINANCE") ||
    (serviceCode === "PERSONAL_MATRIX" && "PRODUCT_MATRIX_PERSONAL") ||
    (serviceCode === "RELATION_MATRIX" && "PRODUCT_MATRIX_COMPATIBILITY");

  useEffect(() => {
    if (!userItems || !valueMatrix.serviceCode) return;

    const validCodes = [matchCode, "PRODUCT_MATRIX_UNIVERSAL"].filter(Boolean);
    const matchingItem = userItems.find(
      (el: any) => validCodes.includes(el.productCode) && el.amount > 0
    );

    if (matchingItem) {
      setIsPayd(true);
      setValueMatrix((prev: any) => ({
        ...prev,
        userItemId: matchingItem.id,
      }));
    }

    if (userItems) {
      setCounterItem(() =>
        userItems
          .filter((el: any) => validCodes.includes(el.productCode))
          .reduce((acc: any, cur: any) => acc + cur.amount, 0)
      );
    }
  }, [userItems, matchCode]);

  useEffect(() => {
    if (userItems && calculationItems) {
      userItems.filter((el: any, index: number) => {
        if (el.id === calculationItems.userItemId)
          return setCurrentId(calculationItems.id);
      });
    }
  }, [calculationItems, userItems]);

  return {
    currentId,
    isPayd,
    counterItem,
  };
};
