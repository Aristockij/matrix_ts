import PersonalInfo from "../PersonalInfo";
import ChakraInfo from "../ChakraInfo";
import { useTranslations } from "next-intl";

const FinanceMatrix = () => {
  const t = useTranslations("Finance");

  const person = [{ name: "Валерия", date: "01.01.1990" }];
  const options = Array.from({ length: 6 }).map((el, index) => ({
    title: t(`paramsMock.${index}.title`),
    description: t(`paramsMock.${index}.text`),
  }));

  const info = [
    [9, 6, 15],
    [5, 17, 22],
    [14, 11, 7],
    [19, 16, 8],
    [5, 5, 10],
    [6, 12, 18],
    [19, 7, 18],
  ];

  const zumValue = info.reduce(
    (acc, el) => {
      acc[0] += el[0] || 0;
      acc[1] += el[1] || 0;
      acc[2] += el[2] || 0;
      return acc;
    },
    [0, 0, 0]
  );

  info.push(zumValue);

  return (
    <>
      <ChakraInfo chakraInfo={info} />
      <PersonalInfo person={person} options={options} />
    </>
  );
};

export default FinanceMatrix;
