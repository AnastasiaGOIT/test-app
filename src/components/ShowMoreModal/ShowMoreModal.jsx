import React from 'react';
import { TabPanels } from '../TabPanel/TabPanel';
import css from './ShowMoreModal.module.css';
import sprite from '../../icons/sprite.svg';

export const ShowMoreModal = ({ closeModal, car }) => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>{car.name}</h3>
      <div className={css.rating_location}>
        <svg width={20} height={20} className={css.icon}>
          <use href={`${sprite}#icon-star`} />
        </svg>
        <p>
          {car.rating} ({car.reviews.length} reviews)
        </p>
        <p>{car.location}</p>
      </div>
      <p className={css.price}>€{car.price}</p>
      <div className={css.photolist}>
        <img
          className={css.image}
          src={car.gallery[0]}
          alt="img"
          width="290px"
          height="309px"
        />
        <img
          className={css.image}
          src={car.gallery[1]}
          alt="img"
          width="290px"
          height="309px"
        />
        <img
          className={css.image}
          src={car.gallery[2]}
          alt="img"
          width="290px"
          height="309px"
        />
      </div>

      <p className={css.description}>{car.description}</p>
      <div className={css.features}>
        <TabPanels props={car} />
      </div>
    </div>
  );
};
