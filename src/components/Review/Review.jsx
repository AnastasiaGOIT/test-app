import React from "react";
import { Star } from "../Star/Star";
import css from "./Review.module.css";

export const Review = ({ props }) => {
  return (
    <div className={css.container}>
      {props.reviews.map((review, index) => (
        <div key={index}>
          <h3 className={css.name}>{review.reviewer_name}</h3>
          <p> {review.reviewer_rating}</p>
          <Star stars={props.reviews.reviewer_rating} />
          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};
