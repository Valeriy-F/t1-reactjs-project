import { Line } from "../../atoms";
import { TNavMenuItem } from "../../molecules";
import { Quiz } from "../../organisms";
import Footer from "../../organisms/footer/footer";
import Header from "../../organisms/header/header";
import About from "../../organisms/sections/about/about";
import Catalog from "../../organisms/sections/catalog/catalog";
import Faq from "../../organisms/sections/faq";
import Hero from "../../organisms/sections/hero/hero";
import Team from "../../organisms/sections/team/team";

import styles from "./home.module.css";

type THomePageProps = {
  headerMenuItems?: TNavMenuItem[];
  footerMenuItems?: TNavMenuItem[];
};

const Home = ({ headerMenuItems = [], footerMenuItems = [] }: THomePageProps) => {
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
        <section id="catalog-section" className={styles["catalog-section"]}>
          <div className="container">
            <Catalog />
          </div>
        </section>
        <section id="about-us-section" className={styles["about-section"]}>
          <div className="container">
            <About />
          </div>
        </section>
        <section id="quiz-section" className={styles["quiz-section"]}>
          <div className="container">
            <Quiz />
          </div>
        </section>
        <section id="our-team-section" className={styles["team-section"]}>
          <div className="container">
            <Team />
          </div>
        </section>
        <section id="faq-section" className={styles["faq-section"]}>
          <div className="container">
            <Faq />
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
