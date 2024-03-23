import css from "./Button.module.css";

export const Button = ({ children }) => {
  return (
    <button type="button" className={css.button}>
      {children}
    </button>
  );
};
