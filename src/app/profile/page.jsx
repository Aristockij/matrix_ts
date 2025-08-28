import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PersonInfo from "@/components/PersonInfo";

const page = () => {
  return (
    <>
      <Header />
      <main className='container content__container'>
        <PersonInfo />
      </main>
      <Footer />
    </>
  );
};
export default page;
