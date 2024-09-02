import React, { createContext, useContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchgamesData = async () => {
      let res = await fetch("https://www.freetogame.com/api/games?platform=pc");
      let data = await res.json();
      setGames(data);
    };
    fetchgamesData();
  }, []);
  const all = { games };
  return <MyContext.Provider value={all}>{children}</MyContext.Provider>;
};

export const UseAppContext = () => useContext(MyContext);
