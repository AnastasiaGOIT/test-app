import { Button } from "../Button";
import css from "./Form.module.css";

export const Form = () => {
  return (
    <div className={css.container}>
      <form className={css.form}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={css.input}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className={css.input}
        />
        <input
          type="text"
          name="date"
          placeholder="Booking Date"
          className={css.input}
        />
        <textarea
          name="comment"
          placeholder="Comment"
          className={css.textarea}
        ></textarea>
        <Button children={"Send"} />
      </form>
    </div>
  );
};
