import { MagnifyingGlass } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <MagnifyingGlass />
    </div>
  );
};

export default Loader;
