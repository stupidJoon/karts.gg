import Base from '../components/Base.js'

class Index extends React.Component {
  render() {
    return (
      <Base id='search'>
        <form id='search' action='user'>
          <label htmlFor='nickname'></label>
          <input type='text' id='nickname' name='nickname' placeholder='닉네임을 적어주세요...'></input>
          <input type='submit' value='검색'></input>
        </form>
        <style jsx>{`
          
        `}</style>
      </Base>
    )
  }
}



export default Index