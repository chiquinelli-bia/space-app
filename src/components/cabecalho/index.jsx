import styled from "styled-components";
import CampoTexto from "@/components/campoTexto";

const HeaderEstilizado = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 212px;
  }
`;

export default function Cabecalho({ setPesquisa, pesquisa }) {
  return (
    <HeaderEstilizado>
      <img
        className="logo"
        src="../../../public/logo.png"
        alt="logo do Space-App"
      />
      <CampoTexto pesquisa={pesquisa} setPesquisa={setPesquisa} />
    </HeaderEstilizado>
  );
}
