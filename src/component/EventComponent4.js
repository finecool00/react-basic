import { useState } from "react";


function EventComponent4() {
  
  const [form, setForm] = useState({data:'', result:''});

  const handleChange = (e) => {
    //e.target <=== tag
    setForm({data: e.target.value, result: form.result});

  }

  const handleClick = () => {
    setForm({data: '', result: form.data});
  }

  return (
    <div>
        <h3>인풋데이터 핸들링(실습)</h3>
        <p>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리</p>
        <p>힌트 : state 두개 또는 object 활용</p>

        <input type="text" onChange={handleChange} value={form.data}/>
        <button onClick={handleClick}>추가하기</button>

        <h3>결과</h3>
        <p>{form.result}</p>

    </div>
  );
}

export default EventComponent4
