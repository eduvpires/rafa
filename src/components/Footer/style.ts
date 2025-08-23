import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  background-color: var(--color-white-2);

  .contacts {
    width: 100%;
    gap: 16px;
    padding: 60px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    @media (max-width: 768px) {
      padding: 60px 30px;
    }
  }

  .contacts-card {
    width: 100%;
    gap: 12px;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }

  .contacts-icon {
    width: 18px;
    height: 18px;
  }

  .contacts-content {
    font-family: var(--font-primary);
    font-size: 14px;
    font-weight: 600;
    color: var(--color-gray-3);
  }
`;
