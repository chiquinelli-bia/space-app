import Titulo from "@/components/titulo/index.jsx";
import Tags from "./tags";
import styled from "styled-components";
import Imagem from "./imagem";
import Populares from "@/components/galeria/populares";
import fotosPopulares from "@/../fotos-populares.json";

const ConteudoGaleria = styled.div`
  margin: 2em 0 2em 297px;
`;
const ListaDeFotos = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  flex-direction: row;
  padding: 0;
  margin: 0;
  min-width: 907px;
  li {
    max-width: 440px;
  }
`;
const ContainerMain = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export default function Galeria({
  fotos = [],
  aoFotoSelecionada,
  aoAlternarFavorito,
}) {
  return (
    <ConteudoGaleria>
      <Tags />
      <Titulo>Navegue Pela Galeria</Titulo>
      <ContainerMain>
        <ListaDeFotos>
          {fotos.map((foto) => (
            <li key={foto.id}>
              <Imagem
                aoZoomSolicitado={aoFotoSelecionada}
                foto={foto}
                aoAlternarFavorito={aoAlternarFavorito}
              />
            </li>
          ))}
        </ListaDeFotos>
        <Populares fotos={fotosPopulares} />
      </ContainerMain>
    </ConteudoGaleria>
  );
}
