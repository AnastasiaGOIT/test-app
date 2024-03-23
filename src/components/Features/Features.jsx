import React from 'react';
import css from '../Card/Card.module.css';
import sprite from '../../icons/sprite.svg';
import style from './Features.module.css';

import { Details } from '../Details/Details';

export const Features = ({ props }) => {
  return (
    <div className={css.block}>
      <ul className={style.list}>
        <li className={css.item}>
          <svg width={20} height={20} className={css.icon}>
            <use href={`${sprite}#icon-users`} />
          </svg>
          {props.adults} adults
        </li>
        <li className={css.item}>
          <svg width={20} height={20} className={css.icon_automatic}>
            <use href={`${sprite}#icon-automatic`} />
          </svg>
          {props.transmission}
        </li>
        <li className={css.item}>
          {' '}
          <svg width={20} height={20} className={css.icon_air}>
            <use href={`${sprite}#icon-conditioner`} />
          </svg>
          AC
        </li>
        <li className={css.item}>
          {' '}
          <svg width={20} height={20} className={css.icon}>
            <use href={`${sprite}#icon-petrol`} />
          </svg>
          {props.engine}
        </li>
        <li className={css.item}>
          {' '}
          <svg width={20} height={20} className={css.icon_kitchen}>
            <use href={`${sprite}#icon-kitchen`} />
          </svg>
          Kitchen
        </li>
        <li className={css.item}>
          {' '}
          <svg width={20} height={20} className={css.icon_bed}>
            <use href={`${sprite}#icon-bed`} />
          </svg>
          {props.details.beds} beds
        </li>
        <li className={css.item}>
          {' '}
          <svg width={20} height={20} className={css.icon_air}>
            <use href={`${sprite}#icon-conditioner`} />
          </svg>
          {props.details.airConditioner}air conditioner
        </li>
        <li className={css.item}>
          {' '}
          <svg width={20} height={20} className={css.icon_cd}>
            <use href={`${sprite}#icon-cd`} />
          </svg>
          CD
        </li>
        <li className={css.item}>
          {' '}
          <svg width={20} height={20} className={css.icon_radio}>
            <use href={`${sprite}#icon-radio`} />
          </svg>
          Radio
        </li>
        <li className={css.item}>
          {' '}
          <svg width={20} height={20} className={css.icon}>
            <use href={`${sprite}#icon-hob`} />
          </svg>
          {props.details.hob} hobs
        </li>
      </ul>
      <Details props={props} />
    </div>
  );
};
