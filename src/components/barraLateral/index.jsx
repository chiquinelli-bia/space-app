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

const ListaEstilizada = styled.ul``;

export default function BarraLateral() {
  const itensBarraLateral = [
    {
      ativo: true,
      iconeAtivo: homeAtivo,
      iconeInativo: homeInativo,
      children: "Início",
    },
    {
      ativo: false,
      iconeAtivo: maisVistasAtivo,
      iconeInativo: maisVistasInativo,
      children: "Mais Vistas",
    },
    {
      ativo: false,
      iconeAtivo: maisCurtidasAtivo,
      iconeInativo: maisCurtidasInativo,
      children: "Mais Curtidas",
    },
    {
      ativo: false,
      iconeAtivo: novasAtivo,
      iconeInativo: novasInativo,
      children: "Novas",
    },
    {
      ativo: false,
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
