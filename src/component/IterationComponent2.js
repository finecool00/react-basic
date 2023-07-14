import { useState } from "react";


function IterationComponent2() {
  //1.
  const [list, setList] = useState([{id: 1, topic: 'hello'},
                                    {id: 2, topic: 'bye'},
                                    //추가..!  
                                  ]);

  //2. input데이터 state
  const [inputData, setInputData] = useState('');

  //3. input데이터 핸들링
  const handleChange = (e) => {
    setInputData(e.target.value);
  }

  //4. 클릭이벤트 생성
  const handleClick = () => {
    console.log(inputData);

    const obj = [{id: list[list.length - 1].id + 1, topic: inputData}];
    //기존 배열에 합침
    //const newData = list.concat(obj);
    
    const newData = [...list, ...obj];
    setList(newData);
    setInputData(''); //공백으로 초기화
  }

  //5. 삭제이벤트 - 삭제는 id가 필요함

  /* 익명함수 선언 전에 연결을 먼저했기 때문에 에러(호이스팅X) 
  해결방법 1 : 인라인으로 연결
  해결방법 2 : 익명함수 이후 연결하도록 위치 조정
  */
  
  const handleRemove= (id) => {

    //return에 true가 걸린 요소만 새로운 배열을 만듦
    //길게 썼을 때
    /* const result = list.filter((item, index) => {
      console.log(item);
      console.log(index);
      return item.id !== id;
    });  
    console.log(result); */

    //짧게 썼을 때
    const result = list.filter(item => item.id !== id);  
    console.log(result);
  }
    
  //이벤트 onDoubleClick은 이벤트함수와 인라인연결 후, handleRemove 익명함수를 호출!하였음
  const newList = list.map(item => <li key={item.id} onDoubleClick={() => handleRemove(item.id)}>{item.topic}</li>)
  return (

    <div>
      <h3>할 일 목록 만들기</h3>
      <input type="text" onChange={handleChange} value={inputData}/>
      <button type="button" onClick={handleClick}>추가하기</button>

      <ul>
        {newList}
      </ul>

    </div>

  );
}
export default IterationComponent2