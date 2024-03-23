import { HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import { toKey } from "../../../app/app-utils";
import { Logo, Typography, TypographyVariant } from "../../atoms";

import styles from "./nav-menu.module.css";

type TNavMenuItem = {
  title: string;
  url: string;
  isAnchor?: boolean;
};

type TNavMenuProps = HTMLAttributes<HTMLElement> & {
  items: TNavMenuItem[];
  color?: "primary" | "secondary";
  slideDirection?: "up" | "down";
};

const NavMenu = ({ items, className, color = "primary", slideDirection = "down", ...otherProps }: TNavMenuProps) => {
  const extraClasses = className ? ` ${className}` : "";
  const toggleButtonKey = "menu-toggle_" + Math.random();

  return (
    <nav className={styles["nav-menu"] + extraClasses} {...otherProps}>
      <NavLink to="/" className={styles["link-logo"]}>
        <Logo />
      </NavLink>
      <input id={toggleButtonKey} className={styles["menu-toggle"]} type="checkbox" />
      <label className={styles["menu-button-container"]} htmlFor={toggleButtonKey}>
        <div className={styles["menu-button"]}></div>
      </label>
      <ul className={`${styles["menu"]} ${styles["menu_" + color]} ${styles["menu_" + slideDirection]}`}>
        {items.map(({ title, url, isAnchor = false }) => {
          const linkTitle = (
            <Typography variant={TypographyVariant.TEXT_SM_BOLD} color="secondary">
              {title}
            </Typography>
          );

          return (
            <li key={toKey(title)} className="menu-item">
              {isAnchor ? <NavHashLink to={url}>{linkTitle}</NavHashLink> : <NavLink to={url}>{linkTitle}</NavLink>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;

export { type TNavMenuItem };
