import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import css from "../Form/Form.module.css";
import style from "./Search.module.css";

export const Search = () => {
  return (
    <div className={style.container}>
      <p className={css.text}>Location</p>
      <input type="text" className={css.input} placeholder="Kyiv, Ukraine" />
      <p className={css.text}>Filters</p>
      <h3 className={css.title}>Vehicle equipment</h3>
      <ul className={css.list_checkbox}>
        <li className={css.item}>
          <label className={style.custom_checkbox}>
            <input type="checkbox" />
          </label>
        </li>
        <li className={css.item}>
          <label className={style.custom_checkbox}>
            <input type="checkbox" />
          </label>
        </li>
        <li className={css.item}>
          <label className={style.custom_checkbox}>
            <input type="checkbox" />
          </label>
        </li>
        <li className={css.item}>
          <label className={style.custom_checkbox}>
            <input type="checkbox" />
          </label>
        </li>
        <li className={css.item}>
          <label className={style.custom_checkbox}>
            <input type="checkbox" />
          </label>
        </li>
      </ul>
      <button children={"Search"} className={style.button_red} />
    </div>
  );
};
