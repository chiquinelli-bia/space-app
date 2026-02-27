import styled from "styled-components";
import GlobalStyles from "@/components/globalStyles";
import Cabecalho from "@/components/cabecalho";
import BarraLateral from "@/components/barraLateral";
import Banner from "@/components/banner";
import Galeria from "@/components/galeria";
import { useState } from "react";
import fotos from "../fotos.json";

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
`;

function App() {
  const [fotosDaGaleria] = useState(fotos);

  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <Banner />
        </MainContainer>
        <Galeria fotos={fotosDaGaleria} />
      </AppContainer>
    </FundoGradiente>
  );
}

export default App;
