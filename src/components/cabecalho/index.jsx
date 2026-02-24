import styled from "styled-components";

const HeaderEstilizado = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    width: 212px;
  }
`;

export default function Cabecalho() {
  return (
    <HeaderEstilizado>
      <img src="../../../public/logo.png" alt="logo do Space-App" />
    </HeaderEstilizado>
  );
}
