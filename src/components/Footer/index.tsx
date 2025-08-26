import {
  FaEnvelope,
  FaPhoneAlt,
  FaUserAlt,
  FaBalanceScale,
} from "react-icons/fa";
import { StyledFooter } from "./style";

export const Footer = () => {
  return (
    <StyledFooter id="contacts">
      <div className="contacts">
        <div className="contacts-card">
          <FaUserAlt className="contacts-icon" />
          <p className="contacts-content">Eduardo Pires</p>
        </div>
        <div className="contacts-card">
          <FaPhoneAlt className="contacts-icon" />
          <p className="contacts-content">51 9956-7757</p>
        </div>
        <div className="contacts-card">
          <FaEnvelope className="contacts-icon" />
          <p className="contacts-content">contato@eduardopiresadv.com.br</p>
        </div>
        <div className="contacts-card">
          <FaBalanceScale className="contacts-icon" />
          <p className="contacts-content">OAB/RS 139.034</p>
        </div>
      </div>
    </StyledFooter>
  );
};
