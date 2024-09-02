import React, { useEffect, useState } from "react";
import "./games.css";
import { FaPlayCircle } from "react-icons/fa";
import { UseAppContext } from "../../context";
import { useNavigate } from "react-router-dom";
export const Games = () => {
  const navigate = useNavigate();

  const { games } = UseAppContext();
  const [searchGames, setSearchGames] = useState();

  useEffect(() => {
    const getGames = async () => {
      games && setSearchGames(games);
    };
    getGames();
  }, [games]);

  const search = (inputSearch) => {
    const newTab = [...games];
    let filter = newTab.filter((e) =>
      e.title.toLowerCase().includes(inputSearch.toLowerCase())
    );
    inputSearch ? setSearchGames(filter) : setSearchGames(games);
  };
  return (
    <>
      <div className="header w-full h-screen flex items-center ]">
        <div className="px-[15vw] text-white w-[50vw] flex flex-col gap-10 ">
          <h1 className="text-5xl font-bold">
            Play Has <span className="text-[#e23fbc]">N</span>o{" "}
            <span className="text-[#e23fbc]">L</span>imits
          </h1>
          <a href="#games">
            <button className="bg-[#e23fbc] px-10 py-4 rounded-2xl text-xl  font-bold flex items-center gap-2 hover:bg-[#e23fbca1] hover:scale-110 duration-500">
              <FaPlayCircle className="" /> Play Now
            </button>
          </a>
        </div>
      </div>
      <div
        id="games"
        className="p-10 bg-[#1a0758] flex flex-wrap gap-5 justify-center">
        <div className="w-full px-[4.8vw] flex justify-end position-sticky top-0 ">
          <input
            onChange={(e) => {
              search(e.target.value);
            }}
            className="bg-transparent border-[2px] border-[#e23fbc] rounded text-white w-1/4 focus:border-none"
            type="text"
            placeholder="Search..."
          />
        </div>
        {searchGames &&
          searchGames.map((e, i) => (
            <>
              <div
                key={i}
                onClick={() => {
                  navigate(`/gameDetails/${e.title}`);
                }}
                className="cursor-pointer flex flex-col w-[27vw] shadow-lg shadow-[#08eeeea9] hover:scale-95 duration-500">
                <img src={e.thumbnail} width="100% " alt="" />
                <div className="w-full h-[30vh] flex flex-col gap-1 text-white bg-[#e23fbca2] p-3">
                  <h1 className="text-2xl font-semibold">{e.title}</h1>
                  <h1
                    className="text-lg text-white/80 truncate font-semibold"
                    title={e.short_description}>
                    <span className="text-gray-400">{e.short_description}</span>
                  </h1>
                  <h1 className="font-semibold">
                    developer :{" "}
                    <span className="text-[#08eeee]">{e.developer}</span>
                  </h1>
                  <h1 className="font-semibold">
                    date release :{" "}
                    <span className="text-[#08eeee]">{e.release_date}</span>
                  </h1>
                  <h1 className="font-semibold">
                    genre : <span className="text-[#08eeee]">{e.genre}</span>
                  </h1>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};
