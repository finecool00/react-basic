import { Fragment } from "react"
import MyComponent from "./component/MyComponent"
import MyComponent2 from "./component/MyComponent2"
import MyComponent3 from "./component/MyComponent3"

function App() {

  return (
    <Fragment>
      <div>나의 새로운 컴포넌트</div>
  
      <MyComponent name={'홍길동'} age={20} addr={'서울시'} email={'상위@naver.com'}/>
      <MyComponent name={'이순신'} age={30} addr={'경기도'} />
      
      
      
      {/* 클래스형 컴포넌트 */}
      <MyComponent2 name={'신사임당'} age={40}/>

      {/* 
      함수형 컴포넌트 MyComponent3를 생성합니다.
      props는 title, content, writer를 전달합니다.
      writer의 기본값은 'admin'으로 선언해주세요
      */}

      <MyComponent3 title={'세이노의 가르침'} content={'부제:피보다 진하게 살아라'} writer={'세이노'}/>
      <MyComponent3 title={'초복'} content={'부제:치킨먹어야지'}/>


    </Fragment>

  )
}

export default App