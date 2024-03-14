import Line from "../../atoms/line/line";
import NavMenu, { TNavMenuItem } from "../../molecules/nav-menu/nav-menu";

import styles from "./header.module.css";

type THeaderProps = {
  menuItems?: TNavMenuItem[];
};

const Header = ({ menuItems = [] }: THeaderProps) => {
  return (
    <>
      <NavMenu items={menuItems} className={styles.nav} />
      <Line color={"secondary-alpha50"} thickness={1} />
    </>
  );
};

export default Header;
