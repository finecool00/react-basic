import { useState } from "react"


function StateComponentQ() {

  const[count, setCount] = useState(0);

  // const CountPlus = () => {
  //   setCount(count+1);
  // }

  // const CountMinus = () => {
  //   setCount(count-1);
  // }

  // const CountReset = () => {
  //   setCount(0);
  // }
  
  
  return(
    <div>
      <h3>실습</h3>
  
      <h3>카운트 : {count} </h3>

      {/* <button onClick={CountPlus}>증가</button>
      <button onClick={CountMinus}>감소</button>
      <button onClick={CountReset}>초기화</button> */}
      
      <button onClick={() => {setCount(count + 1)}}>증가</button>
      <button onClick={() => {setCount(count - 1)}}>감소</button>
      <button onClick={() => {setCount(0)}}>초기화</button>

    </div>


  )


}

export default StateComponentQ