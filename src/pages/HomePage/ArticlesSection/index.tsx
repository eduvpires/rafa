import { StyledSection } from "./style";
import { articles } from "../../../mock";
import { useState, useRef } from "react";

export const ArticlesSection = () => {
  const [selectedArticle, setSelectedArticle] = useState(articles[0]);
  const articleRef = useRef<HTMLElement | null>(null);

  const handleClick = (article: (typeof articles)[0]) => {
    setSelectedArticle(article);
    articleRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  };

  return (
    <StyledSection id="articles">
      <h1 className="section-title">Artigos</h1>
      <ul className="article-list">
        {articles.map((article) => {
          return (
            <li
              className={
                article.id === selectedArticle.id
                  ? "article-card-selected"
                  : "article-card"
              }
              key={article.id}
              onClick={() => handleClick(article)}
            >
              <img
                className="card-image"
                src={article.image}
                alt={article.title}
                loading="lazy"
              />
              <p className="card-title"> {truncateText(article.title, 40)} </p>
              <span className="card-description">
                {truncateText(article.description, 140)}
              </span>
            </li>
          );
        })}
      </ul>
      <article ref={articleRef} className="article">
        <h2 className="article-title">{selectedArticle.title}</h2>
        <p className="article-description">{selectedArticle.description}</p>
        {selectedArticle.sections.map((section) => {
          return (
            <div className="article-content">
              <h2 className="content-title">{section.subtitle}</h2>
              <p className="content-text">{section.content}</p>
            </div>
          );
        })}
      </article>
    </StyledSection>
  );
};
