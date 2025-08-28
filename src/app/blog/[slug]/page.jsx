import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BlogContent from "../../../components/BlogContent";

const page = async ({ params }) => {
  const slug = await params.slug;

  return (
    <>
      <Header />
      <BlogContent slug={slug} />
      <Footer />
    </>
  );
};
export default page;
