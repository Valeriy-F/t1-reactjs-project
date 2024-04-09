import { HomeTemplate } from "../components/templates";

const headerMenuItems = [
  { title: "Catalog", url: "#catalog-section", isAnchor: true },
  { title: "About us", url: "#about-us-section", isAnchor: true },
  { title: "Product selection", url: "#quiz-section", isAnchor: true },
  { title: "Our team", url: "#our-team-section", isAnchor: true },
  { title: "FAQ", url: "#faq-section", isAnchor: true },
  { title: "For staff", url: "products" },
];

const footerMenuItems = [
  { title: "Catalog", url: "#catalog-section", isAnchor: true },
  { title: "About us", url: "#about-us-section", isAnchor: true },
  { title: "Product selection", url: "#quiz-section", isAnchor: true },
  { title: "Our team", url: "#our-team-section", isAnchor: true },
  { title: "FAQ", url: "#faq-section", isAnchor: true },
];

const Main = () => {
  return <HomeTemplate headerMenuItems={headerMenuItems} footerMenuItems={footerMenuItems} />;
};

export default Main;
