import { useState } from "react";

function useCustomeinc() {

  const [count, setCount] = useState(0);
  const [othcount, setOthCount] = useState(1000);

  const inc = () => {
    setCount(count + 1);
  };
  const dec =() =>{
    setOthCount(othcount - 1);
  }

  return {
    count,
    dec,
    inc,
    othcount,
  };
}

export default useCustomeinc;