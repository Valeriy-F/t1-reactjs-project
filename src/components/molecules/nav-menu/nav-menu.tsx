import { HTMLAttributes, useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const extraClasses = className ? ` ${className}` : "";

  return (
    <nav className={styles["nav-menu"] + extraClasses} {...otherProps} data-testid="nav-menu">
      <NavLink to="/" className={styles["link-logo"]} data-testid="logo-link">
        <Logo />
      </NavLink>
      <label
        className={`${styles["menu-button-container"]} ${isBurgerMenuOpen && styles["burger-menu_open"]}`}
        onClick={() => {
          setIsBurgerMenuOpen(!isBurgerMenuOpen);
        }}
      >
        <div className={styles["menu-button"]}></div>
      </label>
      <ul className={`${styles["menu"]} ${styles["menu_" + color]} ${styles["menu_" + slideDirection]}`}>
        {items.map(({ title, url, isAnchor = false }) => {
          const linkTitle = (
            <Typography variant={TypographyVariant.TEXT_SM_BOLD} color="secondary">
              {title}
            </Typography>
          );

          const menuLinkClassName = styles["menu-link"];

          return (
            <li key={toKey(title)} className={`${styles["menu-item"]} ${styles["menu-item_" + color]}`}>
              {isAnchor ? (
                <HashLink to={url} className={menuLinkClassName}>
                  {linkTitle}
                </HashLink>
              ) : (
                <NavLink to={url} className={menuLinkClassName}>
                  {linkTitle}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;

export { type TNavMenuItem };
