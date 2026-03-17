import styled from "styled-components";
import { search } from "@/assets";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  @media screen and (max-width: 700px) {
    width: 82%;
  }
`;

const Input = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0;
    height: 46px;
    font-size: 18px;
  }
`;
const Lupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;

  @media screen and (max-width: 700px) {
    top: 3px;
  }
`;

export default function CampoTexto({ pesquisa, setPesquisa }) {
  return (
    <Wrapper>
      <Input
        type="search"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />
      <Lupa src={search} alt="ícone de lupa" />
    </Wrapper>
  );
}
