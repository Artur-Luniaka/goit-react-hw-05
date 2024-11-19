import { FaReact } from "react-icons/fa";
import { FaHandPointUp } from "react-icons/fa6";
import s from "./Footer.module.css";

const Footer = () => {
  const scrollUpBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={s.footer}>
      <button className={s.btn} onClick={scrollUpBtn}>
        <FaHandPointUp />
        Go
      </button>
      <span className={s.info_box}>
        <p className={s.info}>
          Based on React{" "}
          <span className={s.blue_accent}>
            <FaReact className={s.icon} />
          </span>
        </p>
        <p className={s.info}>
          Created by Artur Luniaka{" "}
          <span className={s.black_accent}>&copy;</span>
        </p>
      </span>
    </footer>
  );
};

export default Footer;
