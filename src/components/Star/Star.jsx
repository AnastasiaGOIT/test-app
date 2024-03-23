import React from 'react';
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { AiOutlineStar } from 'react-icons/ai';
import css from './Star.module.css';

export const Star = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <div></div>
      // <span key={index}>
      //   {stars >= index + 1 ? (
      //     <FaStar className={css.icon} />
      //   ) : stars >= number ? (
      //     <FaStarHalfAlt className={css.icon} />
      //   ) : (
      //     <AiOutlineStar className={css.icon} />
      //   )}
      // </span>
    );
  });

  return <div className={css.icon_full}>{ratingStar}</div>;
};
