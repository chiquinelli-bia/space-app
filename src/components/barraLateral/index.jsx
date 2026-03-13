import styled from "styled-components";
import ItemNavegacao from "@/components/barraLateral/itemNavegacao";
import {
  homeAtivo,
  homeInativo,
  maisCurtidasAtivo,
  maisCurtidasInativo,
  maisVistasAtivo,
  maisVistasInativo,
  novasAtivo,
  novasInativo,
  surpreendaAtivo,
  surpreendaInativo,
} from "@/assets/";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
  @media screen and (max-width: 700px) {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition:
      max-height 0.4s ease,
      opacity 0.3s ease;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    gap: 24px;
    details[open] & {
      max-height: 500px;
      opacity: 1;
    }
  }
`;
const Summary = styled.summary`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  color: #7b78e5;
  font-family: GandhiSansBold;
  text-align: center;
  width: 212px;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    display: list-item;
    width: 100%;
    font-size: 20px;
  }
  &::-webkit-details-marker {
    display: block;
  }
`;

export default function BarraLateral() {
  const itensBarraLateral = [
    {
      ativo: true,
      key: "home",
      iconeAtivo: homeAtivo,
      iconeInativo: homeInativo,
      children: "Início",
    },
    {
      ativo: false,
      key: "vistas",
      iconeAtivo: maisVistasAtivo,
      iconeInativo: maisVistasInativo,
      children: "Mais Vistas",
    },
    {
      ativo: false,
      key: "curtidas",
      iconeAtivo: maisCurtidasAtivo,
      iconeInativo: maisCurtidasInativo,
      children: "Mais Curtidas",
    },
    {
      ativo: false,
      key: "novas",
      iconeAtivo: novasAtivo,
      iconeInativo: novasInativo,
      children: "Novas",
    },
    {
      ativo: false,
      key: "surpreenda",
      iconeAtivo: surpreendaAtivo,
      iconeInativo: surpreendaInativo,
      children: "Surpreenda Me",
    },
  ];
  return (
    <aside>
      <details open>
        <Summary>Menu</Summary>
        <nav>
          <ListaEstilizada>
            {itensBarraLateral.map((item) => (
              <ItemNavegacao
                key={item.key}
                ativo={item.ativo}
                iconeAtivo={item.iconeAtivo}
                iconeInativo={item.iconeInativo}
              >
                {item.children}
              </ItemNavegacao>
            ))}
          </ListaEstilizada>
        </nav>
      </details>
    </aside>
  );
}
