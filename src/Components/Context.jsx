import React from "react";
import { createContext, useContext, useState } from "react";
import { useRef,useEffect } from "react";
export let OurContext = createContext({});

export const useOurContext = () => {
  return useContext(OurContext);
};

const Context = (props) => {
  let nameRef = useRef(null);
  let costRef = useRef(null);
  let [LocalStorageData, setData] = useState([]);
  useEffect(() => {
    setData((prev) => {
      return JSON.parse(localStorage.getItem("user")) || prev;
    });
    Calculation();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    setData((prev) => {
      let user = [
        ...prev,
        {
          name: nameRef.current.value,
          cost: costRef.current.value,
        },
      ];
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    });
    // Clear the form inputs after submission
    nameRef.current.value="";
    costRef.current.value=0;
  };
  

  function DeleteElement(elementIndex) {
    setData((prev) => {
      prev = prev.filter((ele, index) => {
        return index != elementIndex.target.id;
      });
      localStorage.setItem("user", JSON.stringify(prev));
      return prev;
    });
  }
  let [MoneyUsed,setMoneyUsed]=useState(0);

  function Calculation(){
    setMoneyUsed(()=>{
        let getCost=JSON.parse(localStorage.getItem('user')).reduce((acc,currentVal)=>{
            return Number(acc)+Number(currentVal.cost);
        },0)
        return getCost;
    })
  }
  const ElementsUsed={
    nameRef,
    costRef,
    LocalStorageData, setData,
    handleSubmit,
    DeleteElement,
    MoneyUsed,
    setMoneyUsed,
    Calculation
  }

  

  return <OurContext.Provider value={ElementsUsed}>{props.children || null}</OurContext.Provider>;
};

export default Context;
