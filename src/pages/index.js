import styles from "../styles/Home.module.css"
import $ from 'jquery'

export default function Home() {
  const switching = () => {
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  }

  return (
    <div className={styles.loginPage}>
  <div className={styles.form}>
    <form className={styles.registerForm}>
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p className={styles.message}>Already registered? <a href="#" onClick={switching}>Sign In</a></p>
    </form>
    <form className={styles.loginForm}>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p className={styles.message}>Not registered? <a href="#" onClick={switching}>Create an account</a></p>
    </form>
  </div>
</div>
  )
}
