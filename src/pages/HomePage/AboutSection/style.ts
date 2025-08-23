import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 800px;
  gap: 2rem;
  padding: 2rem;
  padding-top: 6rem;

  .section-banner {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      border-radius: 1rem;
    }
  }

  .section-about {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;

    .about-header {
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 2rem;
        font-weight: bold;
        color: var(--color-blue-3);
        margin-bottom: 0.3rem;
      }
      p {
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--color-gray-3);
        margin-bottom: 0.2rem;
      }
      span {
        font-size: 0.9rem;
        color: var(--color-gray-2);
      }
    }

    .about-description {
      .description-text {
        font-size: 1rem;
        line-height: 1.6;
        color: var(--color-gray-3);
        text-align: justify;
      }
    }

    .about-cta {
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 0.8rem;

      p {
        font-weight: 500;
        color: var(--color-blue-2);
      }

      .cta-button {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 0.6rem;
        padding: 0.8rem 1.2rem;

        background: var(--color-whatsapp-2);
        border-radius: 1rem;
        font-weight: bold;

        transition: background 0.3s ease;
        cursor: pointer;

        &:hover {
          background: var(--color-whatsapp-1);
        }

        .cta-icon {
          width: 2rem;
          height: 2rem;
        }

        .cta-text {
          font-size: 1rem;
          color: var(--color-white-1);
        }
      }
    }
  }

  @media (min-width: 1550px) {
    max-height: 1100px;

    .section-banner {
      flex: 0.6;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
    max-height: 1200px;

    .section-banner {
      flex: unset;
      img {
        max-height: 500px;
      }
    }

    .section-about {
      flex: unset;
      justify-content: center;
      align-items: center;
      width: 100%;
      .about-header {
        justify-content: center;
        align-items: center;
      }
      .cta-button {
        width: 100%;
      }
    }
  }
`;
