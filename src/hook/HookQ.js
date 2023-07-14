import { useEffect, useRef, useState } from "react";



function HookQ() {

  //input태그 핸들링
  const [form, setForm] = useState({id:'', pw:''});

  //inputRef 선언
  const IdRef = useRef(null);
  const PwRef = useRef(null);

  const handleChange = (e) => {
    
    const copy = {...form, [e.target.name] : e.target.value}; //비슷한 기능을하는 것들을 하나로 합쳐준 것, target된 것의 키와 값을 저장
    setForm(copy);

  };

  //useEffect 첫번째 마운트에 포커싱
  useEffect(() => {
    IdRef.current.focus();
  },[])


  const handleClick = () => {

    if(form.id === '') {
      alert('ID입력은 필수입니다!😡');
      IdRef.current.focus();
      return;
    } else if(form.pw === '') {
      alert('PW입력은 필수입니다!😡')
      PwRef.current.focus();
      return;
    }

    alert(`ID : ${IdRef.current.value}, PW : ${PwRef.current.value}로 로그인합니다. Welcome😉`)
  }
    
  return (
    <div style={{display:'block'}}>
      <h3>실습</h3>
      <p>로그인 클릭시 공백이라면 공백인 태그에 포커스를 추가하세요</p>
      <p>로그인 클릭시 공백이 아니라면 경고창으로 입력된 id, pw를 출력해주세요</p>
      <p>첫번째 마운트 시 아이디에 자동 포커싱 주세요</p>
      <input type="text" name="id" onChange={handleChange} placeholder="아이디" value={form.id} ref={IdRef}/>
      <input type="text" name="pw" onChange={handleChange} placeholder="비밀번호" value={form.pw} ref={PwRef}/>
      <button onClick={handleClick}>로그인</button>
    </div>
  );


}

export default HookQ;