import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const getColor = ()=>{
    axiosWithAuth()
    .get('/api/colors')
    .then(res =>{
      setColorList(res.data)
    })
    .catch(err => console.log(err))
  }
  useEffect(()=>{
   getColor()
  }, [])

  return (
    <>
      <ColorList colors={colorList} getColor={getColor} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
