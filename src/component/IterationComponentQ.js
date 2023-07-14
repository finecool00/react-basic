import { useState } from "react";


function IterationComponentQ() {

  const arr = [
              {src : '/img/img1.png', title : '아이폰10', price: 1000},
              {src : '/img/img2.png', title : '아이폰11', price: 2000},
              {src : '/img/img3.png', title : '아이폰12', price: 3000},
              {src : '/img/img4.png', title : '아이폰13', price: 4000},
              ];

  const [img, setImg] = useState({src: '/img/img1.png', title: '아이폰10', price: 1000}); 


  const handleClick = (e) => {
    if(e.target.tagName !== "IMG"){
      return;
    }
    setImg({src: e.target.src});
  }
  
  const newArr = arr.map((item, index) => <div key={index} style={{display:'inline-block', margin:'30px'}}>
                                          <img src={item.src} onClick={handleClick} alt="사진"></img>
                                          <p style={{textAlign:'center'}}>상품 : {item.title}</p>
                                          <p style={{textAlign:'center'}}>가격 : {item.price}</p></div>
                                          );

  return (

    <div>
      <h3>이미지 데이터 반복해보기</h3>
      <div>
        <img src={img.src} alt="다시" style={{width:'300px', height:'200px', display:'block'}}/>
        {newArr}
      </div>
    </div>

  );


}
export default IterationComponentQ;