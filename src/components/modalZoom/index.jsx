import Imagem from "@/components/galeria/imagem";
import styled from "styled-components";

const Overlay = styled.div`
  background-color: ${(props) =>
    props.$expandida ? "rgba(0, 0, 0, 0.7)" : "transparent"};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 294px;
  border: none;
  background: transparent;
  @media screen and (max-width: 700px) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const ButtonEstilizado = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 45px;
`;
export default function ModalZoom({ foto, aoFechar }) {
  return (
    <>
      {foto && (
        <>
          <Overlay $expandida={foto} />
          <DialogEstilizado open={!!foto}>
            <Imagem foto={foto} expandida={true} />
            <form method="dialog">
              <ButtonEstilizado onClick={aoFechar}>x</ButtonEstilizado>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
}
