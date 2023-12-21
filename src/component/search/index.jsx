import { ARTICLES_DATA } from '../../constant';
import { useEffect, useState } from 'react';
import './index.css';

const Search = ({ setArticles, filterArticles }) => {
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      filterArticles(userInput);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [userInput]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUserInput(value);

    if (value === '') {
      setArticles(ARTICLES_DATA);
    }
  };

  return (
    <div className='search-field'>
      <input
        className='search-field__input'
        type='text'
        value={userInput}
        onChange={handleInputChange}
        placeholder='Search'
      />
    </div>
  );
};

export default Search;
