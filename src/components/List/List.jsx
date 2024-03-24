import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from '../../services/api';
import { selectCards } from '../../redux/Cards/selector';
import { Card } from '../Card/Card';
import css from './List.module.css';

export const List = () => {
  const cardsData = useSelector(selectCards);
  const [page, setPage] = useState(4);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const slice = cardsData.slice(0, page);

  const showMore = () => {
    setPage(page + page);
  };

  return (
    <div>
      <div>
        <ul>
          {slice.map(item => (
            <Card
              key={item._id}
              name={item.name}
              description={item.description}
              gallery={item.gallery}
              location={item.location}
              price={item.price}
              details={item.details}
              adults={item.adults}
              transmission={item.transmission}
              engine={item.engine}
              rating={item.rating}
              form={item.form}
              length={item.length}
              width={item.width}
              height={item.height}
              tank={item.tank}
              consumption={item.consumption}
              reviews={item.reviews}
            />
          ))}
        </ul>

        {cardsData.length > page && (
          <button onClick={showMore} className={css.button}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};
