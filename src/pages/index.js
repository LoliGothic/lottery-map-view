import { useRef } from "react";
import $ from "jquery";
import axios from "axios";
import styles from "../styles/Home.module.css";


export default function Home(props) {
  const name = useRef(null);
  const signupPassword = useRef(null);
  const signupEmail = useRef(null);
  const loginPassword = useRef(null);
  const loginEmail = useRef(null);

  function switching() {
    // signupとlogin画面を切り替え
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");

    // inputを全部クリア
    name.current.value = "";
    signupPassword.current.value = "";
    signupEmail.current.value = "";
    loginPassword.current.value = "";
    loginEmail.current.value = "";
  };

  function postNewaccountData() {
    // json形式でバックエンドにname,password,emailをpostする
    axios
      .post(props.apiURL + "signup", {
        Name: name.current.value,
        Password: signupPassword.current.value,
        Email: signupEmail.current.value
      })
      .then((res) => {
        console.log("success");
      })
      .catch((error) => {
        console.log("error");
      })

    // signup画面のinputをすべてクリア
    name.current.value = "";
    signupPassword.current.value = "";
    signupEmail.current.value = "";
  }

  function postAccountData() {
    // json形式でバックエンドにpassword,emailをpostする
    axios
      .post(props.apiURL + "login", {
        Password: loginPassword.current.value,
        Email: loginEmail.current.value
      })
      .then((res) => {
        console.log("success");
      })
      .catch((error) => {
        console.log("error");
      })

    // login画面のinputをすべてクリア
    loginPassword.current.value = "";
    loginEmail.current.value = "";
  }
  
  return (
    <div className={styles.body}>
      <div className={styles.loginPage}>
        <div className={styles.form}>
          <form className={styles.registerForm} onSubmit={postNewaccountData}>
            <input type="text" placeholder="username" ref={name} required />
            <input type="password" placeholder="password" ref={signupPassword} required />
            <input type="email" placeholder="email address" ref={signupEmail} required />
            <button>create</button>
            <p className={styles.message}>
              Already registered?{" "}
              <a href="#" onClick={switching}>
                Sign In
              </a>
            </p>
          </form>
          <form className={styles.loginForm} onSubmit={postAccountData}>
            <input type="password" placeholder="password" ref={loginPassword} required />
            <input type="email" placeholder="email address" ref={loginEmail} required />
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
