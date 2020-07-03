import Router from 'next/router'
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Base from '../components/Base.js'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'nickname': null
    };
  }

  render() {
    return (
      <Base>
        <Paper elevation={3} style={{'flex': '1 1 0'}}>
          <InputBase placeholder='닉네임을 적어주세요' onChange={(e) => { this.setState({'nickname': e.target.value}) }} />
          <IconButton color='primary' onClick={() => { if (this.state.nickname != null) { Router.push(`/user?nickname=${this.state.nickname}`) } }}><SearchIcon /></IconButton>
        </Paper>

        {/* <form id='search' action='user'>
          <label htmlFor='nickname'></label>
          <input type='text' id='nickname' name='nickname' placeholder='닉네임을 적어주세요...'></input>
          <input type='submit' value='검색'></input>
        </form>*/}
        
      </Base>
    )
  }
}



export default Index