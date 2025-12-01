import { lazy, Suspense, useEffect } from "react";
import "./App.scss";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Detail"));
const Favorite = lazy(() => import("./pages/Favorite"));

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(898));
  }, []);

  return (
    <>
      <h1 className="border-t-50 border-t-[red] bg-black text-[40px] text-white text-center">
        포켓몬 도감
      </h1>
      <nav className="py-3 border-b-3 border-b-black flex gap-2.5 justify-center">
        <Link to={"/"}>메인</Link>
        <Link to={"/Favorite"}>찜목록</Link>
        <div>
          <span>🔍</span>
          <input
            onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
            className="w-[120px] border-b border-[darkgray] px-2"
          />
        </div>
      </nav>
      <main className="bg-[gray] flex flex-wrap gap-5 justify-center pt-5 pb-[20px]">
        <Suspense fallback={<h1>Loding....</h1>}>
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/Detail/:pokemonId"} element={<Detail />} />
            <Route path={"/Search"} element={<Search />} />
            <Route path={"/Favorite"} element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
