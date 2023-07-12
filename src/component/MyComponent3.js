import PropTypes from 'prop-types'

function MyComponent3({title, content, writer}) {
  return (
    <div>함수형 컴포넌트 실습<br/>
    props: {title}<br/>
    props: {content}<br/>
    props: {writer}<br/>

    </div>

  )
}

MyComponent3.defaultProps = {
  writer: 'admin'
}




MyComponent3.propTypes={

  title : PropTypes.string,
  content : PropTypes.string,
  writer : PropTypes.string.isRequired,

}
export default MyComponent3