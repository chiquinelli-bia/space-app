import Titulo from "@/components/titulo";
import styled from "styled-components";

const PopularesEstilizados = styled.section`
  top: -92px;
  position: relative;
`;
const ListaPopulares = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  gap: 24px;
  padding: 0;
  li img {
    border-radius: 16px;
  }
`;
const ButtonEstilizado = styled.button`
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  box-sizing: border-box;
  background: transparent;
  border: 3px solid #c98cf1;
  font-size: 20px;
  width: 100%;
  padding: 16px 0;
  margin: 24px 0 0 0;
`;

export default function Populares({ fotos = [] }) {
  return (
    <PopularesEstilizados>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ListaPopulares>
        {fotos.map((foto) => (
          <li key={foto.id}>
            <img src={foto.path} />
          </li>
        ))}
      </ListaPopulares>
      <ButtonEstilizado> Ver Mais</ButtonEstilizado>
    </PopularesEstilizados>
  );
}
