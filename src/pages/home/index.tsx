import styles from "./home.module.css";
import { SideBar, Header } from "../../components";

export default function Home() {
  return (
    <main className={styles.main}>
      <SideBar />

      <section className={styles.page}>
        <Header />
      </section>
    </main>
  );
}
