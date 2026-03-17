import styled from "styled-components";

const ItemEstilizado = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? "#7B78E5" : "#D9D9D9")};
  font-family: ${(props) =>
    props.$ativo ? "GandhiSansBold" : "GandhiSansRegular"};
  display: flex;
  align-items: center;
  gap: 22px;
  @media screen and (max-width: 700px) {
    gap: 12px;
    font-size: 18px;
    margin-bottom: 12px;
    img {
      width: 26px;
    }
  }
`;

export default function ItemNavegacao({
  children,
  ativo = false,
  iconeAtivo,
  iconeInativo,
}) {
  return (
    <ItemEstilizado $ativo={ativo} className={ativo ? "" : "disabled"}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
      {children}
    </ItemEstilizado>
  );
}
