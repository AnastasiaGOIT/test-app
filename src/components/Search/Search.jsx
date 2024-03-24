import { CheckboxList } from 'components/Checkbox/Checkbox';
import React from 'react';

import css from '../Form/Form.module.css';
import style from './Search.module.css';

export const Search = () => {
  return (
    <div className={style.container}>
      <p className={css.text}>Location</p>
      <input type="text" className={css.input} placeholder="Kyiv, Ukraine" />
      <p className={css.text}>Filters</p>
      <h3 className={css.title}>Vehicle equipment</h3>
      <div class={css.line}></div>
      <CheckboxList />
      <h3 className={css.title}>Vehicle type</h3>
      <div class={css.line}></div>
      <button children={'Search'} className={style.button_red} />
    </div>
  );
};
