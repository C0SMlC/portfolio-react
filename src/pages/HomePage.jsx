import styles from "./HomePage.module.css";
import SideBar from "../components/SideBar";

function HomePage() {
  return (
    <section className={styles.home_page_container}>
      <SideBar />
    </section>
  );
}

export default HomePage;
