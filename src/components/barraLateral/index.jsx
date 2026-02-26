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
    </aside>
  );
}
