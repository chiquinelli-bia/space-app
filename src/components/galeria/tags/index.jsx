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
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
const TagsEstilizadas = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
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
  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 14px 10px;
  }
`;

export default function Tags({ handleTag }) {
  return (
    <>
      <PEstilizado>Busque por tags:</PEstilizado>
      <TagsEstilizadas>
        {tags.map((tag) => (
          <ButtonEstilizado onClick={handleTag} id={tag.id} key={tag.id}>
            {tag.titulo}
          </ButtonEstilizado>
        ))}
      </TagsEstilizadas>
    </>
  );
}
