import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <figure>
        <img src="" alt="wild_life_logo" />
      </figure>

      <div className={styles.search__hamburger}>
        <figure role="button" className={styles.search_btn}>
          <img src="" alt="search" />
        </figure>

        <figure role="button" className={styles.hamburger}>
          <img src="" alt="hamburger" />
        </figure>
      </div>
    </header>
  );
}
