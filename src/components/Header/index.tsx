import { StyledHeader } from "./style";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <StyledHeader>
      <img className="logo" src={logo} alt="" />
      <nav>
        <ul>
          <li>
            {" "}
            <a href="#about">Sobre</a>
          </li>
          <li>
            {" "}
            <a href="#articles">Artigos</a>
          </li>
          <li>
            {" "}
            <a href="#contacts">Contatos</a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
