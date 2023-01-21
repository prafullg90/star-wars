import styles from './Search.module.scss';
const SearchBar = ({ setSearchByString }) => {
  return (
    <div className={styles.searchEntry}>
      <input
        className={styles.textField}
        type='text'
        name='searchbar'
        placeholder='Type Here For Search moviews'
        onChange={(e) => setSearchByString(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
