import d from "../MatrixInfo/index.module.scss";
import s from "./index.module.scss";
import ChakraContent from "@/components/ChakraContent";

const RelationChakraInfo = ({ data }) => {
  return (
    <section
      className={`${d.chakra__wrap} ${s.chakra__wrap} section section__wrap__sm flex`}
    >
      {data && (
        <>
          <div className='flex-1'>
            <div>{data.name}</div>
            <div>{data.birthDate}</div>
            <br />
            <div
              className={`${d.chakra__img__wrapper} ${s.chakra__img__wrapper} `}
            >
              <div className={`${d.chakra__img} ${s.chakra__img}`}>
                <ChakraContent data={data.matrixPartner1} />
              </div>
            </div>
          </div>

          <div className='flex-1'>
            <div>{data.name2}</div>
            <div>{data.birthDate2}</div>
            <br />
            <div
              className={`${d.chakra__img__wrapper} ${s.chakra__img__wrapper} `}
            >
              <div className={`${d.chakra__img} ${s.chakra__img}`}>
                <ChakraContent data={data.matrixPartner2} />
              </div>
            </div>
          </div>

          <div className={`${d.chakra__img__wrapper} `}>
            <div className={d.chakra__img}>
              <ChakraContent data={data.calc} />
            </div>
          </div>
        </>
      )}
    </section>
  );
};
export default RelationChakraInfo;
