
import { useReducer } from "react";

//1. 리듀서 함수(컴포넌트 외부에서 작성 가능하다)
//state는 상태를 바꾸고 리턴으로 통과시키는 역할
const myReducer = (state, action) => {
  
  console.log(state);
  console.log(action);

  //action에 따라 상태를 변경하고, return state반환
  if(action.x === 'increase') {
    state = {value: state.value + 1};
  } else if(action.x === 'decrease') {
    state = {value: state.value - 1};
  } else if(action.x === 'reset') {
    state = {value: 0};
  }

  return state;
}



function HookReducer() {

  //2. const[현대state, 리듀서실행함수] = 리듀서 훅(리듀서함수, state초기값)
  const [state, func] = useReducer(myReducer, {value:0})


  const handleClick = () => {
    //리듀서 함수를 실행(여기서는 실행함수 func) -> 리듀서의 상태를 나타내기위한 값으로 생각할 것 -> action으로 감
    func({x: 'increase'});
  }

  return (
    <div>
      <h3>카운트 : {state.value} </h3>
      <button onClick={handleClick}>증가</button>
      <button onClick={() => func({x: 'decrease'})}>감소</button>
      <button onClick={() => func({x: 'reset'})}>초기화</button>
    </div>
  )
}

export default HookReducer;