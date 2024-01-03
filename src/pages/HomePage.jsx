import styles from "./HomePage.module.css";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <section className={styles.home_page_container}>
      <SideBar />
      <Outlet />
    </section>
  );
}

export default HomePage;
