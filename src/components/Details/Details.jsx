import React from "react";
import css from "./Details.module.css";

export const Details = ({ props }) => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.text}>Form </p>
          <p className={css.text}>{props.form}</p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Length</p>
          <p className={css.text}>{props.length}</p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Width</p>
          <p className={css.text}>{props.width}</p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Height</p>
          <p className={css.text}>{props.height}</p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Tank</p>
          <p className={css.text}>{props.tank}</p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Consumption</p>
          <p className={css.text}>{props.consumption}</p>
        </li>
      </ul>
    </div>
  );
};
