import { AiFillHome } from "react-icons/ai";
import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <section className={styles.sidebar}>
      <NavLink to="/APP">
        <AiFillHome className={styles.home_icon} />{" "}
      </NavLink>
      <NavLink to="/">
        <AiFillHome className={styles.home_icon} />{" "}
      </NavLink>{" "}
      <NavLink to="/">
        <AiFillHome className={styles.home_icon} />{" "}
      </NavLink>
    </section>
  );
}

export default SideBar;
