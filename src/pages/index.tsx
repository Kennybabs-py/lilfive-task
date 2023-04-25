import styles from "./pages.module.scss";
import { SideBar, Header } from "../components";
import Home from "./home";

export default function Pages() {
  return (
    <main className={styles.main}>
      <SideBar />

      <section className={styles.page__container}>
        <Header />
        <Home />
      </section>
    </main>
  );
}
