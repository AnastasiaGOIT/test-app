import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/Favorites/slice';
import css from './Heart.module.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useEffect, useState } from 'react';

export const Heart = ({ card, onClick }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const localStorageKey = `isFavorite_${card.name}`;
  // Унікальний ключ для кожного сердечка

  useEffect(() => {
    // При завантаженні сторінки відновлюємо стан з локального сховища
    const storedIsFavorite = localStorage.getItem(localStorageKey);
    if (storedIsFavorite) {
      setIsFavorite(JSON.parse(storedIsFavorite));
    }
  }, []);

  const toggleFavorite = () => {
    const updatedIsFavorite = !isFavorite;
    setIsFavorite(updatedIsFavorite);

    localStorage.setItem(localStorageKey, updatedIsFavorite);

    if (updatedIsFavorite) {
      dispatch(addToFavorites(card));
    } else {
      dispatch(removeFromFavorites(card));
    }
  };

  return (
    <div>
      <button onClick={toggleFavorite}>
        {isFavorite ? (
          <FavoriteOutlinedIcon className={css.filledHeart} />
        ) : (
          <FavoriteBorderOutlinedIcon className={css.outlinedHeart} />
        )}
      </button>
    </div>
  );
};
