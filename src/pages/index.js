import styles from "../styles/Home.module.css";
import $ from "jquery";

export default function Home() {
  const switching = () => {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  };

  return (
    <div className={styles.body}>
    <div className={styles.loginPage}>
      <div className={styles.form}>
        <form className={styles.registerForm}>
          <input type="text" placeholder="name" required />
          <input type="password" placeholder="password" required />
          <input type="text" placeholder="email address" required />
          <button>create</button>
          <p className={styles.message}>
            Already registered?{" "}
            <a href="#" onClick={switching}>
              Sign In
            </a>
          </p>
        </form>
        <form className={styles.loginForm}>
          <input type="text" placeholder="username" required />
          <input type="password" placeholder="password" required />
          <button>login</button>
          <p className={styles.message}>
            Not registered?{" "}
            <a href="#" onClick={switching}>
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}
