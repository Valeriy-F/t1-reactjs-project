import Header from "../../organisms/header/header";
import Hero from "../../organisms/hero/hero";

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
        <Hero />
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
