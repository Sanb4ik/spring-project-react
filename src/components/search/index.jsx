import { useEffect, useState } from 'react';
import './index.css';
import { searchArticles } from '../../utils';

const Search = ({ setArticles, articles }) => {
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const fetchData = async () => {
        try {
          if (userInput) {
            const result = await searchArticles(userInput);
            setArticles(result);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [userInput]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUserInput(value);

    if (value === '') {
      setArticles(articles);
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
