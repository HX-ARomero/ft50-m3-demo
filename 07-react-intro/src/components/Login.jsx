import style from "./Login.module.css";

export default function Login() {
  return (
    <>
      <form className={style.formulary}>
        <label className={style.formText}>Usuario: </label>
        <input className={style.formInput} type="text" />
        <br />

        <label className={style.formText}>Contraseña: </label>
        <input className={style.formInput} type="text" />
        <br />

        <button>Login</button>
      </form>
    </>
  );
}
