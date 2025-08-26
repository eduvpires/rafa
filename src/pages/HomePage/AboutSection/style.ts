import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  padding-top: 5rem;

  .section-banner {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 720px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
    }
  }

  .section-about {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    gap: 1.5rem;

    .about-header {
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 2rem;
        color: var(--color-blue-3); /* Azul sóbrio, ex: #2c3e50 */
        font-weight: 700;
        line-height: 1.4;
      }
      p {
        font-size: 1.25rem;
        color: var(--color-gray-3); /* Cinza médio, ex: #5f6a7d */
        font-weight: 500;
        line-height: 1.6;
      }
      span {
        font-size: 1rem;
        color: var(--color-gray-2); /* Cinza médio, ex: #5f6a7d */
        font-weight: 500;
        line-height: 1.6;
      }
    }

    .about-description {
      .description-text {
        font-size: 1.25rem;
        color: var(--color-gray-3); /* Cinza médio, ex: #5f6a7d */
        font-weight: 400;
        line-height: 1.6;
        text-align: justify;
      }
    }
  }

  .about-cta {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 850px;
    gap: 0.5rem;
    padding: 1rem;

    text-decoration: none;
    background: var(--color-whatsapp-1);
    border-radius: 2rem;

    transition: background 0.3s ease;
    cursor: pointer;

    &:hover {
      background: var(--color-whatsapp-2);
    }

    .cta-icon {
      height: 1.5rem;
      width: auto;
    }

    .cta-text {
      font-size: 1.25rem;
      color: var(--color-white-1);
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 5rem;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    .section-banner {
      width: 100%;
      height: auto;
      max-width: 300px;
    }

    .section-about {
      align-items: center;

      .about-header {
        text-align: center;
      }

      .about-description {
        .description-text {
          text-align: center;
        }
      }
    }

    .about-cta {
      padding: 1rem;

      .cta-icon {
        height: 1.5rem;
        width: auto;
      }

      .cta-text {
        font-size: 1.25rem;
      }
    }
  }
`;
