import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Card } from "../component/Card";
import { selectPokemonByRegExp } from "../RTK/selector";

export default function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon");
  const reg = getRegExp(param);

  const pokemon = useSelector(selectPokemonByRegExp(reg));
  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
