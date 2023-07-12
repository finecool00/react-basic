import { useState } from "react";


function EventComponent3() {

  const [selected, setSelected] = useState('메뉴를 선택하세요');


  const handleChange = (e) => {
    setSelected(e.target.value);  
  }
  
  return (
    <div>
      <h3>셀렉트 태그 핸들링(실습)</h3>

      <p>셀렉트 태그가 체인지될 때 선택한 결과를 아래에 출력</p>

      {/* select 태그는 한몸!! option이 아니라 select에 이벤트 준다 */}
      <select name="food" onChange={handleChange} style={{backgroundColor:'skyblue', textAlign:'center', width:'100px'}}>
          <option>피자</option>
          <option>햄버거</option>
          <option>돈까스</option>
      </select>

      <h3>선택한 결과</h3>
      <p>{selected}</p>

    </div>
  );

}

export default EventComponent3