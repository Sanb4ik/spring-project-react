import { useEffect, useState } from 'react';
import Search from '../search';
import './index.css';
import { fetchArticles } from '../../utils';

const ProjectsSection = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchArticles();
        setArticles(result);
        setFilteredArticles(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const ArticleItem = ({ item }) => {
    return (
      <article className='article'>
        <a className='article-item' href={`https://spring.io/projects/${item.img}`}>
          <img
            className='article-item__img'
            src={`https://spring.io/img/projects/${item.img}.svg`}
            alt={item.title}
          />
          <div className='article-item__info'>
            <h1 className='article-item__h1'>{item.title}</h1>
            <p className='article-item__p'>{item.description}</p>
          </div>
        </a>
      </article>
    );
  };

  return (
    <section className='project-section'>
      <Search setArticles={setFilteredArticles} articles={articles} />
      <div className='list container'>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((item) => <ArticleItem key={`${item.title}_a`} item={item} />)
        ) : (
          <h1 className='no_results'>No results</h1>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
