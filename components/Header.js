import SortMenu from './SortMenu';
import SearchBar from './Search';
import styles from './Header.module.scss';
const Header = ({ setSortByValue, setSearchByString }) => {
  return (
    <div className={styles.HeaderSearch}>
      <SortMenu setSortByValue={setSortByValue} />
      <SearchBar setSearchByString={setSearchByString} />
    </div>
  );
};

export default Header;
