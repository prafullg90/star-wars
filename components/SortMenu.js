import { useState } from 'react';
import { useOuterEvent } from '../hooks/useEvent';
import styles from './SortMenu.module.scss';
const SortMenu = ({ setSortByValue }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOuterEvent(false);
  const [selected, setSelected] = useState(false);

  const renderSelected = (type) => {
    if (type === 'episode_id') {
      return 'Episode';
    } else if (type === 'release_date') {
      return 'Release Date';
    } else {
      return 'Sort';
    }
  };
  const renderOptions = () => {
    if (isComponentVisible) {
      return (
        <div className={styles.mainSortMenu}>
          {selected ? (
            <div
              className={styles.mainSortDescription}
              onClick={() => handleOption(false)}
            >
              <span className={styles.clearText}>Clear </span>
            </div>
          ) : null}
          <div
            className={styles.mainSortoption}
            key={'episode_id'}
            onClick={() => handleOption('episode_id')}
          >
            Episode
          </div>
          <div
            className={styles.mainSortoption}
            key={'release_date'}
            onClick={() => handleOption('release_date')}
          >
            Release Date
          </div>
        </div>
      );
    } else return null;
  };

  const toogleDropdown = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const handleOption = (option) => {
    setIsComponentVisible(false);
    setSelected(option);
    setSortByValue(option);
  };

  return (
    <div
      ref={ref}
      className={styles.sortbykey}
      onClick={() => toogleDropdown()}
    >
      <span>{renderSelected(selected)}</span>
      {renderOptions()}
    </div>
  );
};
export default SortMenu;
