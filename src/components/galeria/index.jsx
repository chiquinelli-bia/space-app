import Titulo from "@/components/titulo/index.jsx";
import Tags from "./tags";
import styled from "styled-components";
import Imagem from "./imagem";

const ConteudoGaleria = styled.div`
  margin: 2em 0 2em 297px;
`;
const ListaDeFotos = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  flex-direction: row;
  li {
    max-width: 450px;
  }
`;

export default function Galeria({ fotos = [] }) {
  return (
    <ConteudoGaleria>
      <Tags />
      <Titulo>Navegue Pela Galeria</Titulo>
      <ListaDeFotos>
        {fotos.map((foto) => (
          <li key={foto.id}>
            <Imagem foto={foto} />
          </li>
        ))}
      </ListaDeFotos>
    </ConteudoGaleria>
  );
}
