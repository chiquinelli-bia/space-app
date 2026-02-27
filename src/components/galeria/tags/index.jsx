import styled from "styled-components";

const tags = [
  {
    id: 0,
    titulo: "Todas",
  },
  {
    id: 1,
    titulo: "Estrelas",
  },
  {
    id: 2,
    titulo: "Galáxias",
  },
  {
    id: 3,
    titulo: "Luas",
  },
  {
    id: 4,
    titulo: "Nebulosas",
  },
];

const PEstilizado = styled.p`
  color: #d9d9d9;
  font-size: 24px;
  margin: 1em 2em 1em 0;
`;
const TagsEstilizadas = styled.div`
  display: flex;
  gap: 24px;
`;
const ButtonEstilizado = styled.button`
  padding: 10px 8px;
  color: #ffffff;
  font-size: 24px;
  background-color: rgba(217, 217, 217, 0.3);
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
  &:hover {
    border-color: #c98cf1;
  }
`;

export default function Tags() {
  return (
    <>
      <TagsEstilizadas>
        <PEstilizado>Busque por tags:</PEstilizado>
        {tags.map((tag) => (
          <ButtonEstilizado key={tag.id}>{tag.titulo}</ButtonEstilizado>
        ))}
      </TagsEstilizadas>
    </>
  );
}
