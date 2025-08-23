import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AboutSection } from "./AboutSection";
import { ArticlesSection } from "./ArticlesSection";

export const HomePage = () => {
  return (
    <>
      <Header />
      <AboutSection />
      <ArticlesSection />
      <Footer />
    </>
  );
};
