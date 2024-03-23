import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../Button';
import css from './Card.module.css';
import sprite from '../../icons/sprite.svg';
import Modal from '../../Modal/Modal';
import { ShowMoreModal } from '../ShowMoreModal/ShowMoreModal';
import { Heart } from '../Heart';
import { addToFavorites } from '../../redux/Favorites/slice';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Card = props => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [openShowMore, setShowMore] = useState(false);
  const [getIdColumn, setIdColumn] = useState(null);
  const dispatch = useDispatch();

  const addToFavoritesHandler = card => {
    dispatch(addToFavorites(card));
  };

  const showMore = () => {
    setShowMore(!openShowMore);
  };

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const shortenDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + '...';
  };
  return (
    <div className={css.container}>
      <div>
        <img
          className={css.image}
          src={props.gallery[0]}
          alt="img"
          width="290px"
          height="309px"
        />
      </div>
      <div className={css.container_s}>
        <div className={css.name_price}>
          <h3 className={css.title}>{props.name}</h3>

          <p className={css.price}>€{props.price}</p>

          <Heart
            isFavorite={isFavorite}
            onClick={() => addToFavoritesHandler(props)}
            card={props}
          />
        </div>
        <div className={css.rating_location}>
          <p className={css.rating}>
            {props.rating} ({props.reviews.length} reviews)
          </p>

          <p className={css.location}>{props.location}</p>
        </div>
        <p className={css.description}>
          {expanded
            ? props.description
            : shortenDescription(props.description, 100)}
        </p>
        <ul className={css.list}>
          <li className={css.item}>
            <svg width={20} height={20} className={css.icon}>
              <use href={`${sprite}#icon-users`} />
            </svg>
            {props.adults} adults
          </li>
          <li className={css.item}>
            <svg width={20} height={20} className={css.icon}>
              <use href={`${sprite}#automatic`} />
            </svg>
            {props.transmission}
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
            <svg width={20} height={20} className={css.icon}>
              <use href={`${sprite}#icon-kitchen`} />
            </svg>
            Kitchen
          </li>
          <li className={css.item}>
            {' '}
            <svg width={20} height={20} className={css.icon}>
              <use href={`${sprite}#icon-bed`} />
            </svg>
            {props.details.beds} beds
          </li>
          <li className={css.item}>
            {' '}
            <svg width={20} height={20} className={css.icon}>
              <use href={`${sprite}#icon-conditioner`} />
            </svg>
            AC
          </li>
        </ul>
        {openShowMore && (
          <Modal openModal={showMore}>
            <ShowMoreModal closeModal={showMore} car={props} />
          </Modal>
        )}
        <button
          children={'Show more'}
          className={css.button_red}
          onClick={() => {
            showMore();
          }}
        />
      </div>
    </div>
  );
};
