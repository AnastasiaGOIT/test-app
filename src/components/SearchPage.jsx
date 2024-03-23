
import { List } from './List/List';
import { Search } from './Search/Search';
import css from './SearchPage.module.css';

export const SearchPage = () => {
  return (
    <div className={css.container}>
      <Search />
      <List />
    </div>
  );
};
