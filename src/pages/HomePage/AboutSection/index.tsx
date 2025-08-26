import { StyledSection } from "./style";
import foto from "../../../assets/foto.png";
import wpp from "../../../assets/wpp.svg";

export const AboutSection = () => {
  return (
    <StyledSection id="about">
      <figure className="section-banner">
        <img src={foto} alt="" />
      </figure>
      <div className="section-about">
        <div className="about-header">
          <h1>Eduardo Pires</h1>
          <p>Advogado Cível</p>
          <span>OAB/RS 139.034</span>
        </div>
        <div className="about-description">
          <p className="description-text">
            Graduado em Ciências Jurídicas e Sociais pela Universidade Federal
            do Rio Grande do Sul, atuo com sólida experiência nas áreas de
            Direito Cível, Direito Empresarial, Recuperação de Crédito, entre outras áreas afins relacionadas ao Direito Civil. Meu trabalho é pautado na excelência técnica, na
            análise minuciosa de cada caso e na busca por soluções eficazes que
            garantam segurança jurídica e resultados concretos.
          </p>
        </div>
        <a href="https://wa.me/5199567757" className="about-cta">
          <img src={wpp} alt="WhatsApp" className="cta-icon" />
          <p className="cta-text">Analisar meu caso</p>
        </a>
      </div>
    </StyledSection>
  );
};
