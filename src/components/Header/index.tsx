import styles from "./header.module.scss";
import WildLifeLogo from "../../assets/wild_life_logo.svg";
import SearchIcon from "../../assets/search_icon.svg";
import Hamburger from "../../assets/hamburger_icon.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <figure>
        <img src={WildLifeLogo} alt="wild_life_logo" />
      </figure>

      <div className={styles.search__hamburger}>
        <figure role="button" className={styles.search_btn}>
          <img src={SearchIcon} alt="search" />
        </figure>

        <figure role="button" className={styles.hamburger}>
          <img src={Hamburger} alt="hamburger" />
        </figure>
      </div>
    </header>
  );
}
