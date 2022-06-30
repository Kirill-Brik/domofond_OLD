import Image from "next/image";
import Link from "../link/link";
import ItemNamed from "../itemNamed/itemNamed";
import { ILink } from "../../utils/interfaces";

import styles from "./header.module.scss";

export default function Header() {
  const links: Array<ILink> = [
    { text: "Главная", url: "/" },
    { text: "О компании", url: "/about" },
    { text: "Наши дома", url: "/homes" },
  ];

  return (
    <header className={styles.container}>
      <Image
        className={styles.logo}
        src="/logo.svg"
        width={185}
        height={80}
        layout="fixed"
      />
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          {links.map((link, index) => (
            <li key={index}>
              <Link url={link.url} text={link.text} />
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.phone}>
        <ItemNamed
          icon="phone_in_talk"
          text="8 (903) 845-10-13"
          name="Ежедневно с 9:00 до 20:00"
          reversed
        />
      </div>
    </header>
  );
}
