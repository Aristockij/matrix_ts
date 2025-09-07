import { useEffect, useState } from "react";
import { useGetItems } from "./useGetItems";

interface ValueMatrixTypes {
  question: string;
  pickedCards: number[];
  serviceCode: string;
  userItemId: string | number;
}

interface PropsTypes {
  serviceCode: string;
  value: any;
}

export const useTarotAnswer = ({ serviceCode, value }: PropsTypes) => {
  const [valueMatrix, setValueMatrix] = useState<ValueMatrixTypes | null>(null);
  const [counterItem, setCounterItem] = useState(0);
  const { data: userItems } = useGetItems();

  const matchCode = serviceCode === "TARO_SPREAD" && "PRODUCT_TARO_UNIVERSAL";

  useEffect(() => {
    if (!userItems) return;
    const matchingItem = userItems.find(
      (el: any) => el.productCode === matchCode && el.amount > 0
    );

    if (matchingItem && value) {
      setValueMatrix(() => ({
        question: value.question,
        pickedCards: value.pickedCards,
        serviceCode: serviceCode,
        userItemId: matchingItem.id,
      }));
    }

    if (userItems) {
      setCounterItem(() =>
        userItems
          .filter((el: any) => el.productCode === matchCode)
          .reduce((acc: any, cur: any) => acc + cur.amount, 0)
      );
    }
  }, [userItems, value]);

  return {
    valueMatrix,
    counterItem,
  };
};
