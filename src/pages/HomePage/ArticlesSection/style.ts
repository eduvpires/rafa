import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  padding: 2rem;
  gap: 60px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  background-color: var(--color-white-3);

  @media (max-width: 768px) {
    padding: 120px 30px;
  }

  @media (max-width: 425px) {
    padding: 120px 16px;
  }

  .section-title {
    font-size: 2rem;
    color: var(--color-blue-3);

    @media (max-width: 768px) {
      font-size: 40px;
    }
  }

  .article-list {
    width: 100%;
    gap: 2rem;
    height: 450px;
    overflow-x: auto;
    padding-bottom: 1rem;

    display: flex;
    flex-direction: row;
    justify-content: start;
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
    min-width: 400px;
    max-width: 400px;
    height: 100%;
    background-color: #fff;
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

    /* @media (max-width: 768px) {
      width: 100%;
      min-width: 400px;
    } */

    &:hover {
      transform: scale(1.02);
    }

    .article-title {
      font-size: 1rem;
      color: var(--color-blue-2); /* Azul sóbrio, ex: #2c3e50 */
      padding-top: 0.7rem;
      font-weight: 700;
      line-height: 1.4;
    }

    .article-description {
      font-size: 1rem;
      color: var(--color-gray-2); /* Cinza médio, ex: #5f6a7d */
      line-height: 1.6;
      font-weight: 400;
    }

    .article-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 6px;
    }
  }
`;
