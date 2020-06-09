import Link from "next/link";
import styles from "../components/styles/layout.module.css";
import utilStyles from "../components/styles/utils.module.css";

export default function HeaderImage() {
  const name = "Kenny Chung";
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img
            src="/images/profile.jpg"
            className={` ${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt={name}
          />
        </a>
      </Link>
      <h2 className={utilStyles.headingMd}>
        <Link href="/">
          <a className={utilStyles.whiteText}>{name}</a>
        </Link>
      </h2>
    </header>
  );
}
