import Header from "../../organisms/header/header";
import About from "../../organisms/sections/about/about";
import Catalog from "../../organisms/sections/catalog/catalog";
import Hero from "../../organisms/sections/hero/hero";
import Quiz from "../../organisms/sections/quiz/quiz";
import Team from "../../organisms/sections/team/team";

import styles from "./home.module.css";

const menuItems = [
  { title: "Catalog", url: "#" },
  { title: "About us", url: "#" },
  { title: "Product selection", url: "#" },
  { title: "Our team", url: "#" },
  { title: "FAQ", url: "#" },
  { title: "For staff", url: "#" },
];

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <Header menuItems={menuItems} />
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
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
