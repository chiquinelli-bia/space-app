import styled from "styled-components";
import { banner } from "@/assets/index.js";

const Wrapper = styled.div`
  position: relative;
  width: 75vw;
  min-height: 328px;
  margin: 0;
  background: url(${banner}) no-repeat right center / cover;
  border-radius: 20px;
`;

const TituloEstilizado = styled.h1`
  position: absolute;
  left: 64px;
  top: 40%;
  padding: 0 64px;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  color: #ffffff;
  transform: translateY(-50%);
  max-width: 300px;
`;

export default function Banner() {
  return (
    <Wrapper>
      <TituloEstilizado>
        A Galeria mais completa de fotos no espaço
      </TituloEstilizado>
    </Wrapper>
  );
}
