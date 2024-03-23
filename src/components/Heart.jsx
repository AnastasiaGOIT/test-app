// import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/Favorites/slice';
import css from './Heart.module.css';

export const Heart = ({ isFavorite, card, onClick }) => {
  const dispatch = useDispatch();

  // const toggleFavorite = () => {
  //   if (isFavorite) {
  //     dispatch(removeFromFavorites(card));
  //   } else {
  //     dispatch(addToFavorites(card));
  //   }
  // };

  return (
    <div>
      <button onClick={onClick}>heart</button>
    </div>
    // <div onClick={onClick}>
    //   {isFavorite ? <FaHeart className={css.heart} /> : <FaRegHeart />}
    // </div>
  );
};
