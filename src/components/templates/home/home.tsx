import { Line } from "../../atoms";
import Footer from "../../organisms/footer/footer";
import Header from "../../organisms/header/header";
import About from "../../organisms/sections/about/about";
import Catalog from "../../organisms/sections/catalog/catalog";
import Faq from "../../organisms/sections/faq";
import Hero from "../../organisms/sections/hero/hero";
import Quiz from "../../organisms/sections/quiz/quiz";
import Team from "../../organisms/sections/team/team";

import styles from "./home.module.css";

const headerMenuItems = [
  { title: "Catalog", url: "#" },
  { title: "About us", url: "#" },
  { title: "Product selection", url: "#" },
  { title: "Our team", url: "#" },
  { title: "FAQ", url: "#" },
  { title: "For staff", url: "products" },
];

const footerMenuItems = [
  { title: "Catalog", url: "#" },
  { title: "About us", url: "#" },
  { title: "Product selection", url: "#" },
  { title: "Our team", url: "#" },
  { title: "FAQ", url: "#" },
];

const faqSectionData = [
  { quastion: "Question 1", answer: "Long answer to the first question." },
  { quastion: "Question 2", answer: "Long answer to the second question." },
];

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <Header menuItems={headerMenuItems} />
          <Line color={"secondary-alpha50"} thickness={1} />
        </div>
      </header>
      <main>
        <section className={styles["hero-section"]}>
          <div className="container">
            <Hero />
          </div>
        </section>
        <section className={styles["catalog-section"]}>
          <div className="container">
            <Catalog />
          </div>
        </section>
        <section className={styles["about-section"]}>
          <div className="container">
            <About />
          </div>
        </section>
        <section className={styles["quiz-section"]}>
          <div className="container">
            <Quiz />
          </div>
        </section>
        <section className={styles["team-section"]}>
          <div className="container">
            <Team />
          </div>
        </section>
        <section className={styles["faq-section"]}>
          <div className="container">
            <Faq data={faqSectionData} />
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <Footer menuItems={footerMenuItems} />
        </div>
      </footer>
    </>
  );
};

export default Home;
