import Matrix from "../Matrix";
import TaroSection from "../TaroSection";
import Aspects from "../Aspects";
import Comments from "../Comments";
import Tariffs from "../Tariffs";
import FAQ from "../FAQ";
import Distribution from "../Distribution";
import CanvasBg from "../CanvasBg";

const Content = () => {
  return (
    <main className='container content__container'>
      <CanvasBg />
      <Matrix />
      <TaroSection />
      <Aspects />
      <Comments />
      <Tariffs />
      <FAQ />
      <Distribution />
    </main>
  );
};
export default Content;
