import styled from "styled-components";
import { facebook, instagram, twitter } from "@/assets/index.js";

const FooterEstilizado = styled.footer`
  background-color: #04244f;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 100vw;
  padding: 30px 24px;
  align-items: center;
`;
const Icones = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  a {
    text-decoration: none;
  }
`;
const PEstilizado = styled.p`
  color: #ffffff;
  font-size: 16px;
`;

export default function Footer() {
  return (
    <FooterEstilizado>
      <Icones>
        <a href="#">
          <img src={facebook} alt="icone do facebook" />
        </a>
        <a href="#">
          <img src={instagram} alt="icone do instagram" />
        </a>
        <a href="#">
          <img src={twitter} alt="icone do twitter" />
        </a>
      </Icones>
      <PEstilizado>Adaptado por Bianca Chiquinelli.</PEstilizado>
    </FooterEstilizado>
  );
}
