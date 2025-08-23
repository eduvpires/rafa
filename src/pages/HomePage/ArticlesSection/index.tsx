import { StyledSection } from "./style";
import { articles } from "../../../mock";

export const ArticlesSection = () => {
  return (
    <StyledSection id="articles">
      <h1 className="section-title">Artigos</h1>
      <ul className="article-list">
        {articles.map((article) => {
          return (
            <li className="article-card" key={article.id}>
              <img
                className="article-image"
                src={article.image}
                alt={article.title}
                loading="lazy"
              />

              <p className="article-title"> {article.title} </p>
              <span className="article-description">{article.description}</span>
            </li>
          );
        })}
      </ul>
    </StyledSection>
  );
};
