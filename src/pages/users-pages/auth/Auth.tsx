import { useParams } from "react-router-dom";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import styles from "./auth.module.scss";
function Auth() {
  const { type } = useParams();

  return (
    <div className={styles.auth}>
      {type === "login" ? <Login /> : <Registration />}
    </div>
  );
}

export default Auth;
