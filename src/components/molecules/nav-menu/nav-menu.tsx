import { HTMLAttributes } from "react";

import { toKey } from "../../../utils/string-util";
import Logo from "../../atoms/logo/logo";
import Typography, { ETypographyVariant } from "../../atoms/typography/typography";

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
      <a href="#" className={styles["link-logo"]}>
        <Logo />
      </a>
      <ul className={styles["menu"]}>
        {items.map(({ title, url }) => (
          <li key={toKey(title)} className="menu-item">
            <a href={url}>
              <Typography variant={ETypographyVariant.TEXT_SM_BOLD} color="secondary">
                {title}
              </Typography>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;

export { type TNavMenuItem };
