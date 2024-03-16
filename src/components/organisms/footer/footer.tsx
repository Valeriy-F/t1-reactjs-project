import NavMenu, { TNavMenuItem } from "../../molecules/nav-menu/nav-menu";

import styles from "./footer.module.css";

type TFooterProps = {
  menuItems?: TNavMenuItem[];
};

const Footer = ({ menuItems = [] }: TFooterProps) => {
  return (
    <div className={styles["content-container"]}>
      <NavMenu items={menuItems} />
    </div>
  );
};

export default Footer;
