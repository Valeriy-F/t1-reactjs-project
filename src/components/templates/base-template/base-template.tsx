import { PropsWithChildren } from "react";

import { TNavMenuItem } from "../../molecules";
import Header from "../../organisms/header/header";

import styles from "./base-template.module.css";

type TBaseTemplateProps = PropsWithChildren & {
  headerNavData?: TNavMenuItem[];
};

const BaseTemplate = ({ children, headerNavData = [{ title: "Back to site", url: "/" }] }: TBaseTemplateProps) => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <Header menuItems={headerNavData} />
        </div>
      </header>
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default BaseTemplate;
