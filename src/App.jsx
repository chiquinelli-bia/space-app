import styled from "styled-components";
import GlobalStyles from "@/components/globalStyles";
import Cabecalho from "@/components/cabecalho";
import BarraLateral from "@/components/barraLateral";
import Banner from "@/components/banner";
import Galeria from "@/components/galeria";
import { useEffect, useState } from "react";
import fotos from "../fotos.json";
import ModalZoom from "@/components/modalZoom";
import Footer from "@/components/footer";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin: 0 24px;
  }
`;

function App() {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [pesquisa, setPesquisa] = useState("");

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }
    setFotosDaGaleria(
      fotosDaGaleria.map((fotoDaGaleria) => {
        return {
          ...fotoDaGaleria,
          favorita:
            fotoDaGaleria.id === foto.id
              ? !foto.favorita
              : fotoDaGaleria.favorita,
        };
      }),
    );
  };
  const handleTag = (event) => {
    const buttonId = event.target.id;
    let fotosPesquisadas = fotos.filter((fotos) => {
      if (Number(buttonId) === 0) {
        console.log("foi");
        return fotosDaGaleria;
      }
      return fotos.tagId === Number(buttonId);
    });
    setFotosDaGaleria(fotosPesquisadas);
  };
  useEffect(() => {
    console.log(pesquisa);
    let termo = pesquisa.toLowerCase();
    let fotosPesquisadas = fotos.filter((fotos) => {
      return fotos.titulo.toLowerCase().includes(termo);
    });
    setFotosDaGaleria(fotosPesquisadas);
  }, [pesquisa]);

  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Cabecalho pesquisa={pesquisa} setPesquisa={setPesquisa} />
        <MainContainer>
          <BarraLateral />
          <Banner />
        </MainContainer>
        <Galeria
          aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
          fotos={fotosDaGaleria}
          aoAlternarFavorito={aoAlternarFavorito}
          handleTag={handleTag}
        />
      </AppContainer>
      <Footer></Footer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
      />
    </FundoGradiente>
  );
}

export default App;
