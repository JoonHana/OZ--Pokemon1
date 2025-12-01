import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { memo, useState } from "react";

const CardContainer = styled.section`
  width: 150px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  border-bottom: 5px solid black;
  border-right: 5px solid black;
  img {
    width: 120px;
  }
`;

export const Card = memo(({ pokemon }) => {
  const [isImageLoding, setIsImageLoding] = useState(true);
  const nevigate = useNavigate();
  return (
    <CardContainer onClick={() => nevigate(`/Detail/${pokemon.id}`)}>
      {isImageLoding ? (
        <div className="w-[120px] h-[120px] leading-[120px] text-center">
          Loding...
        </div>
      ) : null}
      <img
        onLoad={() => setIsImageLoding(false)}
        src={pokemon.front}
        style={{ display: isImageLoding ? "none" : "block" }}
      />
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CardContainer>
  );
});
