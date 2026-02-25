import styled from "styled-components";
import CampoTexto from "../campoTexto";

const HeaderEstilizado = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 212px;
  }
`;

export default function Cabecalho() {
  return (
    <HeaderEstilizado>
      <img
        className="logo"
        src="../../../public/logo.png"
        alt="logo do Space-App"
      />
      <CampoTexto />
    </HeaderEstilizado>
  );
}
