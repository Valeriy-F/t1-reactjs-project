import About from "../../organisms/about/about";
import Catalog from "../../organisms/catalog/catalog";
import Header from "../../organisms/header/header";
import Hero from "../../organisms/hero/hero";
import Quiz from "../../organisms/quiz/quiz";

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
        <section>
          <Hero />
        </section>
        <section className={styles["catalog-section"]}>
          <Catalog />
        </section>
        <section>
          <About />
        </section>
        <section className={styles["quiz-section"]}>
          <Quiz />
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
