import { HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

import { toKey } from "../../../app/app-utils";
import { Logo, Typography, TypographyVariant } from "../../atoms";

import styles from "./nav-menu.module.css";

type TNavMenuItem = {
  title: string;
  url: string;
};

type TNavMenuProps = HTMLAttributes<HTMLElement> & {
  items: TNavMenuItem[];
};

const NavMenu = ({ items, className, ...otherProps }: TNavMenuProps) => {
  const extraClasses = className ? ` ${className}` : "";

  return (
    <nav className={styles["nav-menu"] + extraClasses} {...otherProps}>
      <NavLink to="/" className={styles["link-logo"]}>
        <Logo />
      </NavLink>
      <ul className={styles["menu"]}>
        {items.map(({ title, url }) => (
          <li key={toKey(title)} className="menu-item">
            <NavLink to={url}>
              <Typography variant={TypographyVariant.TEXT_SM_BOLD} color="secondary">
                {title}
              </Typography>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;

export { type TNavMenuItem };
