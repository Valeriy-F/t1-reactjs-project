import { NavMenu, TNavMenuItem } from "../../molecules";

import styles from "./header.module.css";

type THeaderProps = {
  menuItems?: TNavMenuItem[];
};

const Header = ({ menuItems = [] }: THeaderProps) => {
  return (
    <>
      <NavMenu items={menuItems} className={styles.nav} color="secondary" />
    </>
  );
};

export default Header;
