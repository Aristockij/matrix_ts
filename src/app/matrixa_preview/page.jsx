"use client";
import dynamic from "next/dynamic";

import Header from "@/components/Header";
// import MatrixPreview from "@/components/MatrixPreview";

const page = () => {
  const DynamicComponentWithNoSSR = dynamic(
    () => import("@/components/MatrixPreview"),
    { ssr: false }
  );

  return (
    <main className='container content__container'>
      <Header />
      <DynamicComponentWithNoSSR />
    </main>
  );
};
export default page;
