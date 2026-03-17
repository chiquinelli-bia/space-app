// import styled from "styled-components";
import { favoritoAtivo, favoritoInativo, expandir } from "@/assets";
import styled from "styled-components";
const ImagemEstilizada = styled.figure`
  width: ${(props) => (props.$expandida ? "80vw" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    padding: 16px 20px;
    align-items: center;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
    button {
      border: none;
      background: transparent;
    }
    @media screen and (max-width: 700px) {
      padding: 12px 16px;
      gap: 35px;
      h3,
      h4 {
        font-size: 14px;
      }
    }
    @media screen and (max-width: 430px) {
      padding: 8px 10px;
      gap: 12px;
      figcaption div {
        width: 100px;
      }
      h3 {
        font-size: 12px;
      }
      h4 {
        font-size: 10px;
        width: 80%;
      }
      button img {
        width: 16px;
      }
    }
  }
`;

export default function Imagem({
  foto,
  aoZoomSolicitado,
  expandida = false,
  aoAlternarFavorito,
}) {
  const favorito = foto.favorita ? favoritoAtivo : favoritoInativo;
  return (
    <ImagemEstilizada $expandida={expandida}>
      <img src={foto.path} alt={foto.titulo} />
      <figcaption>
        <div>
          <h3>{foto.titulo}</h3>
          <h4>{foto.fonte}</h4>
        </div>
        {!expandida && (
          <footer>
            <button
              aria-label="Favoritar"
              onClick={() => aoAlternarFavorito(foto)}
            >
              <img src={favorito} alt="" />
            </button>
            <button
              aria-label="Expandir"
              onClick={() => aoZoomSolicitado(foto)}
            >
              <img src={expandir} alt="" />
            </button>
          </footer>
        )}
      </figcaption>
    </ImagemEstilizada>
  );
}
