import { ARTICLES_DATA } from '../../constant';
import { useState } from 'react';
import Search from '../search';
import './index.css';

const ProjectsSection = () => {
  const [articles, setArticles] = useState(ARTICLES_DATA);

  function filterArticles(input) {
    const filteredArticles = ARTICLES_DATA.filter((item) => {
      return (
        item.description.toLowerCase().includes(input.toLowerCase()) ||
        item.title.toLowerCase().includes(input.toLowerCase())
      );
    });
    setArticles(filteredArticles);
  }

  const createArticles = (articles) => {
    if (articles.length === 0) {
      return <h1 className='no_results'>No results</h1>;
    }

    return articles.map((item, index) => (
      <article className='article' key={index}>
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
    ));
  };

  return (
    <section className='project-section'>
      <Search setArticles={setArticles} filterArticles={filterArticles} />
      <div className='list container'>{createArticles(articles)}</div>
    </section>
  );
};

export default ProjectsSection;
