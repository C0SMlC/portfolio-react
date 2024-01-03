import { AiFillHome } from "react-icons/ai";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <nav className={styles.sidebar}>
      <NavLink to="/overview">
        <AiFillHome className={styles.home_icon} />{" "}
      </NavLink>
      <NavLink to="/skills">
        <FaCode className={styles.home_icon} />{" "}
      </NavLink>{" "}
      <NavLink to="/projects">
        <MdAssignmentTurnedIn className={styles.home_icon} />{" "}
      </NavLink>
      <NavLink to="/socials">
        <TiSocialTwitter className={`${styles.home_icon} ${styles.socials}`} />{" "}
      </NavLink>
    </nav>
  );
}

export default SideBar;
