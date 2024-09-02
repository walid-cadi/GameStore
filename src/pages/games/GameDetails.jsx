import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UseAppContext } from "../../context";
import "./gameDetails.css";
import { FaArrowLeft } from "react-icons/fa";

export const GameDetails = () => {
  const { title } = useParams();
  const { games } = UseAppContext();

  const navigat = useNavigate();

  let getGame = games.find((e) => e.title == title);
  return (
    <>
      <div className="header-details w-full h-screen flex items-center justify-center">
        <div className="w-[70vw] h-[50vh] bg-[#ffffff61] rounded-3xl p-5 ">
          <div className="w-[100%] h-[75%]  flex gap-4">
            <img className="h-[100%]" src={getGame.thumbnail} alt="" />
            <div className="p-5 flex flex-col gap-2">
              <h1 className="font-semibold text-4xl text-purple-900">
                {getGame.title}
              </h1>
              <p className="font-semibold text-xl text-black">
                {getGame.short_description}
              </p>
              <p className="font-semibold text-lg text-black">
                {getGame.developer}
              </p>
              <div className="flex gap-4">
                <p className="font-semibold text-lg text-black">
                  {getGame.genre}
                </p>
                <p className="font-semibold text-lg text-black">
                  {getGame.release_date}
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[100%] h-[25%] text-white flex items-center gap-5 p-2 ">
            <a href={getGame.game_url} target="_blank">
              <button className="bg-[#e23fbc] px-10 py-4 rounded-2xl text-xl  font-bold flex items-center gap-2 hover:bg-[#e23fbc] hover:scale-110 duration-500">
                Go To Game
              </button>
            </a>
            <a href="" target="">
              <button
                onClick={() => {
                  navigat("/games");
                }}
                className="bg-[#e23fbc] px-10 py-4 rounded-2xl text-xl  font-bold flex items-center gap-2 hover:bg-[#e23fbc] hover:scale-110 duration-500">
                <FaArrowLeft /> Back
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
