import { PropsWithChildren } from "react";

import { Typography, TypographyVariant } from "../../atoms";
import { TNavMenuItem } from "../../molecules";
import Header from "../../organisms/header/header";

import styles from "./base-template.module.css";

type TBaseTemplateProps = PropsWithChildren & {
  title?: string;
  headerNavData?: TNavMenuItem[];
};

const BaseTemplate = ({
  title,
  children,
  headerNavData = [{ title: "Back to site", url: "/" }],
}: TBaseTemplateProps) => {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <Header menuItems={headerNavData} />
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className={styles["content-container"]}>
              <div className={styles["title"]}>
                <Typography variant={TypographyVariant.H2}>{title}</Typography>
              </div>
              <div className={styles["content"]}>{children}</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BaseTemplate;
