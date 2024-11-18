import BackLink from "../../components/BackLink/BackLink";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <BackLink to="/">Go Back</BackLink>
      <h2 className={s.title}>Ooops page is not found...😥</h2>
    </div>
  );
};

export default NotFoundPage;
