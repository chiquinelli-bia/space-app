import styled from "styled-components";
import CampoTexto from "@/components/campoTexto";
import { logo } from "@/assets/index.js";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 212px;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
  }
`;

export default function Cabecalho({ setPesquisa, pesquisa }) {
  return (
    <HeaderEstilizado>
      <img className="logo" src={logo} alt="logo do Space-App" />
      <CampoTexto pesquisa={pesquisa} setPesquisa={setPesquisa} />
    </HeaderEstilizado>
  );
}
