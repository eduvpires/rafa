import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  padding: 2rem;
  padding-top: 2rem;
  gap: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--color-white-3);

  .section-title {
    font-size: 2rem;
    color: var(--color-blue-3); /* Azul sóbrio, ex: #2c3e50 */
    font-weight: 700;
    line-height: 1.4;
  }

  .article-list {
    width: 100%;
    gap: 2rem;
    padding: 0.25rem 0.25rem 1rem 0.25rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    flex-wrap: nowrap;
    overflow-x: scroll;
    scroll-behavior: smooth;
  }

  .article-list::-webkit-scrollbar {
    height: 0.5rem;
  }

  .article-list::-webkit-scrollbar-track {
    background: transparent;
  }

  .article-list::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
    transition: background-color 0.3s ease;
  }

  .article-list::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }

  .article-card {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    transition: transform 0.2s ease;

    min-width: 280px;
    max-width: 280px;
    padding: 1rem;
    gap: 0.5rem;

    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }

    .card-title {
      padding-top: 0.7rem;
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.4;
      color: var(--color-blue-3); /* Azul sóbrio, ex: #2c3e50 */
    }

    .card-description {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.6;
      color: var(--color-gray-2); /* Cinza médio, ex: #5f6a7d */
    }

    .card-image {
      width: 100%;
      object-fit: cover;
      border-radius: 6px;
    }
  }

  .article-card-selected {
    transform: scale(1.02);
    height: 100%;
    min-width: 280px;
    max-width: 280px;
    background-color: #ffffff;
    border: 1px solid var(--color-blue-2);
    border-radius: 1rem;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    gap: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.02);
    }

    .card-title {
      font-size: 1rem;
      color: var(--color-blue-2); /* Azul sóbrio, ex: #2c3e50 */
      padding-top: 0.7rem;
      font-weight: 600;
      line-height: 1.4;
    }

    .card-description {
      font-size: 1rem;
      color: var(--color-gray-2); /* Cinza médio, ex: #5f6a7d */
      font-weight: 400;
      line-height: 1.6;
    }

    .card-image {
      width: 100%;
      object-fit: cover;
      border-radius: 6px;
    }
  }

  .article {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    gap: 0.5rem;

    .article-title {
      font-size: 1.5rem;
      color: var(--color-blue-3); /* Azul sóbrio, ex: #2c3e50 */
      font-weight: 600;
      line-height: 1.4;
    }

    .article-description {
      font-size: 1rem;
      color: var(--color-gray-3); /* Cinza médio, ex: #5f6a7d */
      font-weight: 400;
      line-height: 1.6;
    }

    .article-content {
      .content-title {
        font-size: 1rem;
        color: var(--color-blue-3); /* Azul sóbrio, ex: #2c3e50 */
        font-weight: 600;
        line-height: 1.4;
      }

      .content-text {
        font-size: 1rem;
        color: var(--color-gray-3); /* Cinza médio, ex: #5f6a7d */
        font-weight: 400;
        line-height: 1.6;
        text-align: justify;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    .article-list {
      gap: 0.5rem;
    }
  }

  @media (max-width: 1300px) {
    .article-list {
      justify-content: start;
    }
  }
`;
