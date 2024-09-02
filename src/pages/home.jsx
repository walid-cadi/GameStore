import React from "react";
import logo from "../assets/images/téléchargement.png";
import { Icons, Images, JsonData } from "../constant";
const Home = () => {
  // const data = [{ name: "Images", image: "logo" }];
  return (
    <div>
      {JsonData.people.map((e, i) => (
        <>
          <h1>name : {e.name}</h1>
          <h1>age : {e.age}</h1>
          <h1>city : {e.city}</h1>
        </>
      ))}
      {/* {data.map((e, i) => <>
        <img src={Images[e.image]} alt="" />
      </>)} */}
      {/* <img src={logo} alt="" /> */}
      {/* <img src={Images.logo} alt="" /> */}
      {/* <Icons.Apple /> */}
    </div>
  );
};

export default Home;
