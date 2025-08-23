import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1rem 2rem;

  background-color: var(--color-white-3);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);

  position: fixed;
  z-index: 1;

  @media (max-width: 425px) {
    justify-content: center;
  }

  .logo {
    height: 40px;
  }

  nav {
    @media (max-width: 425px) {
      display: none;
    }
  }

  nav ul {
    display: flex;
    gap: 32px;
    list-style: none;

    @media (max-width: 764px) {
      gap: 16px;
    }

    li a {
      text-decoration: none;
      color: #1a2b4c;
      font-weight: 500;
      font-size: 16px;
      font-family: var(--font-primary);
      transition: all 0.2s ease;

      padding: 4px 8px;
      border-radius: 4px;

      &:hover {
        background-color: #f1f3f5;
        color: #000;
      }
    }
  }
`;
