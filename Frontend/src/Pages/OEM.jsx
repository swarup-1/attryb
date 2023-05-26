import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Style from "../Styles/oem.module.css";
import { getFun } from "../Redux/OEM/oem.action";
import { useDispatch, useSelector } from "react-redux";
import OEMCard from "../Components/OEMCard";

const OEM = () => {
  const [search, setSearch] = useState("");
  const store = useSelector((state) => state.oemReducer);
  console.log('store:', store)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFun({search}));
  }, [search]);
  return (
    <div>
      <div className={Style.inputBox}>
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search your Car here from Top Original Equipment Manufacturers" className={Style.input} />
      </div>
      {store.loading && <h2 style={{textAlign:"center"}} >Loading...</h2>}
      <div className={Style.container}>
        {store.oemData && store.oemData.map((el,i)=>(
            <OEMCard key={i} car={el} />
        )) }
      </div>
    </div>
  );
};

export default OEM;
